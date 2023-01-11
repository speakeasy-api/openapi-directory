import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FeatureFlagAndSettingValuesUsingSDKKey:
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

    
    def get_setting_value_by_sdkkey(self, request: operations.GetSettingValueBySdkkeyRequest) -> operations.GetSettingValueBySdkkeyResponse:
        r"""Get value
        This endpoint returns the value of a Feature Flag or Setting 
        in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def replace_setting_value_by_sdkkey(self, request: operations.ReplaceSettingValueBySdkkeyRequest) -> operations.ReplaceSettingValueBySdkkeyResponse:
        r"""Replace value
        This endpoint replaces the value of a Feature Flag or Setting 
        in a specified Environment identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
        want to change to its original state. Not listing one means that it will reset.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send a replace request body as below:
        ```
        {
        	\"value\": true
        }
        ```
        Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_setting_value_by_sdkkey(self, request: operations.UpdateSettingValueBySdkkeyRequest) -> operations.UpdateSettingValueBySdkkeyResponse:
        r"""Update value
        This endpoint updates the value of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
        identified by the <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://app.configcat.com/sdkkey\">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        The advantage of using JSON Patch is that you can describe individual update operations on a resource
        without touching attributes that you don't want to change. It supports collection reordering, so it also 
        can be used for reordering the targeting rules of a Feature Flag or Setting.
        
        For example: We have the following resource.
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": false
        }
        ```
        If we send an update request body as below:
        ```
        [
        	{
        		\"op\": \"replace\",
        		\"path\": \"/value\",
        		\"value\": true
        	}
        ]
        ```
        Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [
        		{
        			\"percentage\": 30,
        			\"value\": true
        		},
        		{
        			\"percentage\": 70,
        			\"value\": false
        		}
        	],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/settings/{settingKeyOrId}/value", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingValueBySdkkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif r.status_code == 204:
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

    