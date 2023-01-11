import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FeatureFlagsAndSettings:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_setting(self, request: operations.CreateSettingRequest) -> operations.CreateSettingResponse:
        r"""Create Flag
        This endpoint creates a new Feature Flag or Setting in a specified Config
        identified by the `configId` parameter.
        
        **Important:** The `key` attribute must be unique within the given Config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_setting(self, request: operations.DeleteSettingRequest) -> operations.DeleteSettingResponse:
        r"""Delete Flag
        This endpoint removes a Feature Flag or Setting from a specified Config, 
        identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_setting(self, request: operations.GetSettingRequest) -> operations.GetSettingResponse:
        r"""Get Flag
        This endpoint returns the metadata attributes of a Feature Flag or Setting 
        identified by the `settingId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_settings(self, request: operations.GetSettingsRequest) -> operations.GetSettingsResponse:
        r"""List Flags
        This endpoint returns the list of the Feature Flags and Settings defined in a 
        specified Config, identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SettingModelHaljson]])
                res.setting_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SettingModel]])
                res.setting_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_setting(self, request: operations.UpdateSettingRequest) -> operations.UpdateSettingResponse:
        r"""Update Flag
        This endpoint updates the metadata of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
        
        Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
        The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
        
        The advantage of using JSON Patch is that you can describe individual update operations on a resource
        without touching attributes that you don't want to change.
        
        For example: We have the following resource.
        ```
        {
        	\"settingId\": 5345,
        	\"key\": \"myGrandFeature\",
        	\"name\": \"Tihs is a naem with soem typos.\",
        	\"hint\": \"This flag controls my grandioso feature.\",
        	\"settingType\": \"boolean\",
        	\"tags\": [
        		{
        			\"tagId\": 0,
        			\"name\": \"sample tag\",
        			\"color\": \"whale\"
        		}
        	]
        }
        ```
        If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
        ```
        [
        	{
        		\"op\": \"replace\",
        		\"path\": \"/name\",
        		\"value\": \"This is the name without typos.\"
        	},
        	{
        		\"op\": \"add\",
        		\"path\": \"/tags/-\",
        		\"value\": 2
        	}
        ]
        ```
        Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
        So we get a response like this:
        ```
        {
        	\"settingId\": 5345,
        	\"key\": \"myGrandFeature\",
        	\"name\": \"This is the name without typos.\",
        	\"hint\": \"This flag controls my grandioso feature.\",
        	\"settingType\": \"boolean\",
        	\"tags\": [
        		{
        			\"tagId\": 0,
        			\"name\": \"sample tag\",
        			\"color\": \"whale\"
        		},
        		{
        			\"tagId\": 2,
        			\"name\": \"another tag\",
        			\"color\": \"koala\"
        		}
        	]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModelHaljson])
                res.setting_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingModel])
                res.setting_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    