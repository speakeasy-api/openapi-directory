import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Printouts:
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

    
    def get_almaws_v1_task_lists_printouts(self, request: operations.GetAlmawsV1TaskListsPrintoutsRequest) -> operations.GetAlmawsV1TaskListsPrintoutsResponse:
        r"""Retrieve Printouts
        This API returns a list of Printouts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/almaws/v1/task-lists/printouts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlmawsV1TaskListsPrintoutsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAlmawsV1TaskListsPrintouts200ApplicationJSON])
                res.get_almaws_v1_task_lists_printouts_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_almaws_v1_task_lists_printouts_printout_id_(self, request: operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDRequest) -> operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse:
        r"""Retrieve a Printout
        This Web service returns a Printout given a Printout ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/almaws/v1/task-lists/printouts/{printout_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems])
                res.onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_almaws_v1_task_lists_printouts(self, request: operations.PostAlmawsV1TaskListsPrintoutsRequest) -> operations.PostAlmawsV1TaskListsPrintoutsResponse:
        r"""Act on Printouts
        This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/almaws/v1/task-lists/printouts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlmawsV1TaskListsPrintoutsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema])
                res.onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_almaws_v1_task_lists_printouts_printout_id_(self, request: operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDRequest) -> operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDResponse:
        r"""Printout Service
        This API operates on an printout. given a Printout ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/almaws/v1/task-lists/printouts/{printout_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAlmawsV1TaskListsPrintoutsPrintoutIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems])
                res.onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    