"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class FeatureFlagAndSettingValues:
    r"""With these endpoints you can control how your existing Feature Flags and Settings should serve their values.
    You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.
    
    To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
    obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.
    
    You also have to specify in which Environment you want to change the served value configuration by its
    `environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.
    """
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def get_setting_value(self, request: operations.GetSettingValueRequest) -> operations.GetSettingValueResponse:
        r"""Get value
        This endpoint returns the value of a Feature Flag or Setting 
        in a specified Environment identified by the `environmentId` parameter.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetSettingValueRequest, base_url, '/v1/environments/{environmentId}/settings/{settingId}/value', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetSettingValueResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/hal+json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif http_res.status_code in [400, 401, 404, 429]:
            pass

        return res

    def get_setting_values(self, request: operations.GetSettingValuesRequest) -> operations.GetSettingValuesResponse:
        r"""Get values
        This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
        in a specified Environment identified by the `environmentId` parameter.
        
        The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
        The `value` represents what the clients will get when the evaluation requests of our SDKs 
        are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
        
        The `rolloutRules` and `percentageRules` attributes are representing the current 
        Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
        in an **ordered** collection, which means the order of the returned rules is matching to the
        evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetSettingValuesRequest, base_url, '/v1/configs/{configId}/environments/{environmentId}/values', request)
        
        
        client = self._security_client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetSettingValuesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/hal+json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ConfigSettingValuesModel])
                res.config_setting_values_model = out
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ConfigSettingValuesModel])
                res.config_setting_values_model = out
        elif http_res.status_code in [400, 401, 404, 429]:
            pass

        return res

    def replace_setting_value(self, request: operations.ReplaceSettingValueRequest) -> operations.ReplaceSettingValueResponse:
        r"""Replace value
        This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
        
        Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
        
        **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
        want to change in its original state. Not listing one means that it will reset.
        
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
        Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
        So we get a response like this:
        ```
        {
        	\"rolloutPercentageItems\": [],
        	\"rolloutRules\": [],
        	\"value\": true
        }
        ```
        
        The `rolloutRules` property describes two types of rules:
        
        - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
        - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.ReplaceSettingValueRequest, base_url, '/v1/environments/{environmentId}/settings/{settingId}/value', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "update_setting_value_model", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.ReplaceSettingValueRequest, request)
        
        client = self._security_client
        
        http_res = client.request('PUT', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.ReplaceSettingValueResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/hal+json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif http_res.status_code in [400, 401, 404, 429]:
            pass

        return res

    def update_setting_value(self, request: operations.UpdateSettingValueRequest) -> operations.UpdateSettingValueResponse:
        r"""Update value
        This endpoint updates the value of a Feature Flag or Setting 
        with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
        
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
        Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
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
        
        The `rolloutRules` property describes two types of rules:
        
        - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
        - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.UpdateSettingValueRequest, base_url, '/v1/environments/{environmentId}/settings/{settingId}/value', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "json_patch_input", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        if data is None and form is None:
            raise Exception('request body is required')
        query_params = utils.get_query_params(operations.UpdateSettingValueRequest, request)
        
        client = self._security_client
        
        http_res = client.request('PATCH', url, params=query_params, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.UpdateSettingValueResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/hal+json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModelHaljson])
                res.setting_value_model_haljson = out
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.SettingValueModel])
                res.setting_value_model = out
        elif http_res.status_code in [204, 400, 401, 404, 429]:
            pass

        return res

    