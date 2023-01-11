

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils


from .author import Author
from .group import Group
from .pad import Pad
from .session import Session


SERVERS = [
	"http://etherpad.local",
	"http://pads.mro.name/api/1.2.15",
]


class SDK:
    
    author: Author
    group: Group
    pad: Pad
    session: Session

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def append_text_using_get(self, request: operations.AppendTextUsingGetRequest) -> operations.AppendTextUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appendText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet200ApplicationJSON])
                res.append_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet400ApplicationJSON])
                res.append_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet401ApplicationJSON])
                res.append_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingGet500ApplicationJSON])
                res.append_text_using_get_500_application_json_object = out

        return res

    
    def append_text_using_post(self, request: operations.AppendTextUsingPostRequest) -> operations.AppendTextUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appendText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost200ApplicationJSON])
                res.append_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost400ApplicationJSON])
                res.append_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost401ApplicationJSON])
                res.append_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendTextUsingPost500ApplicationJSON])
                res.append_text_using_post_500_application_json_object = out

        return res

    
    def copy_pad_using_get(self, request: operations.CopyPadUsingGetRequest) -> operations.CopyPadUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/copyPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet200ApplicationJSON])
                res.copy_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet400ApplicationJSON])
                res.copy_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet401ApplicationJSON])
                res.copy_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingGet500ApplicationJSON])
                res.copy_pad_using_get_500_application_json_object = out

        return res

    
    def copy_pad_using_post(self, request: operations.CopyPadUsingPostRequest) -> operations.CopyPadUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/copyPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost200ApplicationJSON])
                res.copy_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost400ApplicationJSON])
                res.copy_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost401ApplicationJSON])
                res.copy_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadUsingPost500ApplicationJSON])
                res.copy_pad_using_post_500_application_json_object = out

        return res

    
    def copy_pad_without_history_using_get(self, request: operations.CopyPadWithoutHistoryUsingGetRequest) -> operations.CopyPadWithoutHistoryUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/copyPadWithoutHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadWithoutHistoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet200ApplicationJSON])
                res.copy_pad_without_history_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet400ApplicationJSON])
                res.copy_pad_without_history_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet401ApplicationJSON])
                res.copy_pad_without_history_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingGet500ApplicationJSON])
                res.copy_pad_without_history_using_get_500_application_json_object = out

        return res

    
    def copy_pad_without_history_using_post(self, request: operations.CopyPadWithoutHistoryUsingPostRequest) -> operations.CopyPadWithoutHistoryUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/copyPadWithoutHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyPadWithoutHistoryUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost200ApplicationJSON])
                res.copy_pad_without_history_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost400ApplicationJSON])
                res.copy_pad_without_history_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost401ApplicationJSON])
                res.copy_pad_without_history_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CopyPadWithoutHistoryUsingPost500ApplicationJSON])
                res.copy_pad_without_history_using_post_500_application_json_object = out

        return res

    
    def get_attribute_pool_using_get(self, request: operations.GetAttributePoolUsingGetRequest) -> operations.GetAttributePoolUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getAttributePool"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributePoolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet200ApplicationJSON])
                res.get_attribute_pool_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet400ApplicationJSON])
                res.get_attribute_pool_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet401ApplicationJSON])
                res.get_attribute_pool_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingGet500ApplicationJSON])
                res.get_attribute_pool_using_get_500_application_json_object = out

        return res

    
    def get_attribute_pool_using_post(self, request: operations.GetAttributePoolUsingPostRequest) -> operations.GetAttributePoolUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getAttributePool"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttributePoolUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost200ApplicationJSON])
                res.get_attribute_pool_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost400ApplicationJSON])
                res.get_attribute_pool_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost401ApplicationJSON])
                res.get_attribute_pool_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAttributePoolUsingPost500ApplicationJSON])
                res.get_attribute_pool_using_post_500_application_json_object = out

        return res

    
    def get_pad_id_using_get(self, request: operations.GetPadIDUsingGetRequest) -> operations.GetPadIDUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPadID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPadIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet200ApplicationJSON])
                res.get_pad_id_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet400ApplicationJSON])
                res.get_pad_id_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet401ApplicationJSON])
                res.get_pad_id_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingGet500ApplicationJSON])
                res.get_pad_id_using_get_500_application_json_object = out

        return res

    
    def get_pad_id_using_post(self, request: operations.GetPadIDUsingPostRequest) -> operations.GetPadIDUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPadID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPadIDUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost200ApplicationJSON])
                res.get_pad_id_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost400ApplicationJSON])
                res.get_pad_id_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost401ApplicationJSON])
                res.get_pad_id_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPadIDUsingPost500ApplicationJSON])
                res.get_pad_id_using_post_500_application_json_object = out

        return res

    
    def get_revision_changeset_using_get(self, request: operations.GetRevisionChangesetUsingGetRequest) -> operations.GetRevisionChangesetUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRevisionChangeset"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionChangesetUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet200ApplicationJSON])
                res.get_revision_changeset_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet400ApplicationJSON])
                res.get_revision_changeset_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet401ApplicationJSON])
                res.get_revision_changeset_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingGet500ApplicationJSON])
                res.get_revision_changeset_using_get_500_application_json_object = out

        return res

    
    def get_revision_changeset_using_post(self, request: operations.GetRevisionChangesetUsingPostRequest) -> operations.GetRevisionChangesetUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRevisionChangeset"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionChangesetUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost200ApplicationJSON])
                res.get_revision_changeset_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost400ApplicationJSON])
                res.get_revision_changeset_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost401ApplicationJSON])
                res.get_revision_changeset_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionChangesetUsingPost500ApplicationJSON])
                res.get_revision_changeset_using_post_500_application_json_object = out

        return res

    
    def get_saved_revisions_count_using_get(self, request: operations.GetSavedRevisionsCountUsingGetRequest) -> operations.GetSavedRevisionsCountUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSavedRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedRevisionsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet200ApplicationJSON])
                res.get_saved_revisions_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet400ApplicationJSON])
                res.get_saved_revisions_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet401ApplicationJSON])
                res.get_saved_revisions_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingGet500ApplicationJSON])
                res.get_saved_revisions_count_using_get_500_application_json_object = out

        return res

    
    def get_saved_revisions_count_using_post(self, request: operations.GetSavedRevisionsCountUsingPostRequest) -> operations.GetSavedRevisionsCountUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSavedRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedRevisionsCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost200ApplicationJSON])
                res.get_saved_revisions_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost400ApplicationJSON])
                res.get_saved_revisions_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost401ApplicationJSON])
                res.get_saved_revisions_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedRevisionsCountUsingPost500ApplicationJSON])
                res.get_saved_revisions_count_using_post_500_application_json_object = out

        return res

    
    def get_stats_using_get(self) -> operations.GetStatsUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getStats"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet200ApplicationJSON])
                res.get_stats_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet400ApplicationJSON])
                res.get_stats_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet401ApplicationJSON])
                res.get_stats_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingGet500ApplicationJSON])
                res.get_stats_using_get_500_application_json_object = out

        return res

    
    def get_stats_using_post(self) -> operations.GetStatsUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getStats"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost200ApplicationJSON])
                res.get_stats_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost400ApplicationJSON])
                res.get_stats_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost401ApplicationJSON])
                res.get_stats_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatsUsingPost500ApplicationJSON])
                res.get_stats_using_post_500_application_json_object = out

        return res

    
    def list_saved_revisions_using_get(self, request: operations.ListSavedRevisionsUsingGetRequest) -> operations.ListSavedRevisionsUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSavedRevisions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSavedRevisionsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet200ApplicationJSON])
                res.list_saved_revisions_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet400ApplicationJSON])
                res.list_saved_revisions_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet401ApplicationJSON])
                res.list_saved_revisions_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingGet500ApplicationJSON])
                res.list_saved_revisions_using_get_500_application_json_object = out

        return res

    
    def list_saved_revisions_using_post(self, request: operations.ListSavedRevisionsUsingPostRequest) -> operations.ListSavedRevisionsUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listSavedRevisions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSavedRevisionsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost200ApplicationJSON])
                res.list_saved_revisions_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost400ApplicationJSON])
                res.list_saved_revisions_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost401ApplicationJSON])
                res.list_saved_revisions_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSavedRevisionsUsingPost500ApplicationJSON])
                res.list_saved_revisions_using_post_500_application_json_object = out

        return res

    
    def move_pad_using_get(self, request: operations.MovePadUsingGetRequest) -> operations.MovePadUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/movePad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MovePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet200ApplicationJSON])
                res.move_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet400ApplicationJSON])
                res.move_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet401ApplicationJSON])
                res.move_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingGet500ApplicationJSON])
                res.move_pad_using_get_500_application_json_object = out

        return res

    
    def move_pad_using_post(self, request: operations.MovePadUsingPostRequest) -> operations.MovePadUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/movePad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MovePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost200ApplicationJSON])
                res.move_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost400ApplicationJSON])
                res.move_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost401ApplicationJSON])
                res.move_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MovePadUsingPost500ApplicationJSON])
                res.move_pad_using_post_500_application_json_object = out

        return res

    
    def restore_revision_using_get(self, request: operations.RestoreRevisionUsingGetRequest) -> operations.RestoreRevisionUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/restoreRevision"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreRevisionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet200ApplicationJSON])
                res.restore_revision_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet400ApplicationJSON])
                res.restore_revision_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet401ApplicationJSON])
                res.restore_revision_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingGet500ApplicationJSON])
                res.restore_revision_using_get_500_application_json_object = out

        return res

    
    def restore_revision_using_post(self, request: operations.RestoreRevisionUsingPostRequest) -> operations.RestoreRevisionUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/restoreRevision"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreRevisionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost200ApplicationJSON])
                res.restore_revision_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost400ApplicationJSON])
                res.restore_revision_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost401ApplicationJSON])
                res.restore_revision_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreRevisionUsingPost500ApplicationJSON])
                res.restore_revision_using_post_500_application_json_object = out

        return res

    
    def save_revision_using_get(self, request: operations.SaveRevisionUsingGetRequest) -> operations.SaveRevisionUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveRevision"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveRevisionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet200ApplicationJSON])
                res.save_revision_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet400ApplicationJSON])
                res.save_revision_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet401ApplicationJSON])
                res.save_revision_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingGet500ApplicationJSON])
                res.save_revision_using_get_500_application_json_object = out

        return res

    
    def save_revision_using_post(self, request: operations.SaveRevisionUsingPostRequest) -> operations.SaveRevisionUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveRevision"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SaveRevisionUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost200ApplicationJSON])
                res.save_revision_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost400ApplicationJSON])
                res.save_revision_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost401ApplicationJSON])
                res.save_revision_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SaveRevisionUsingPost500ApplicationJSON])
                res.save_revision_using_post_500_application_json_object = out

        return res

    