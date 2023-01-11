import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RequestedResources:
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

    
    def get_almaws_v1_task_lists_requested_resources(self, request: operations.GetAlmawsV1TaskListsRequestedResourcesRequest) -> operations.GetAlmawsV1TaskListsRequestedResourcesResponse:
        r"""Get Requested Resources
        This API returns a list of requested resources to be picked from the shelf in Alma
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/almaws/v1/task-lists/requested-resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlmawsV1TaskListsRequestedResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAlmawsV1TaskListsRequestedResources200ApplicationJSON])
                res.get_almaws_v1_task_lists_requested_resources_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_almaws_v1_task_lists_requested_resources(self, request: operations.PostAlmawsV1TaskListsRequestedResourcesRequest) -> operations.PostAlmawsV1TaskListsRequestedResourcesResponse:
        r"""Act on Requested Resources
        This API performs an action on requested resources that are on the shelf in Alma
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/almaws/v1/task-lists/requested-resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlmawsV1TaskListsRequestedResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema])
                res.onealmaws_1v1_1task_lists_1requested_resources_get_responses_200_content_application_1json_schema = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    