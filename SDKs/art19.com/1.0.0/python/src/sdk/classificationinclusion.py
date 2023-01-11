import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ClassificationInclusion:
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

    
    def get_classification_inclusions(self, request: operations.GetClassificationInclusionsRequest) -> operations.GetClassificationInclusionsResponse:
        r"""Get ClassificationInclusion records
        Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.
        
        In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
        be provided. Failing to do so renders a `400 Bad Request` response.
        
        - `ids[]`
        - `classified_id` and `classified_type`
        - `classified_id` and `classification_type`
        - `classification_id` and `classified_type`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/classification_inclusions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClassificationInclusionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassificationInclusions200ApplicationVndAPIPlusJSON])
                res.get_classification_inclusions_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassificationInclusions400ApplicationVndAPIPlusJSON])
                res.get_classification_inclusions_400_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    
    def get_classification_inclusions_id_(self, request: operations.GetClassificationInclusionsIDRequest) -> operations.GetClassificationInclusionsIDResponse:
        r"""Get a specific classification inclusion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classification_inclusions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClassificationInclusionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.api+json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClassificationInclusionsID200ApplicationVndAPIPlusJSON])
                res.get_classification_inclusions_id_200_application_vnd_api_plus_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass
        elif r.status_code == 429:
            res.headers = r.headers
            

        return res

    