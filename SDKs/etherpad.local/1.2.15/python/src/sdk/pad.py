import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Pad:
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

    
    def append_chat_message_using_get(self, request: operations.AppendChatMessageUsingGetRequest) -> operations.AppendChatMessageUsingGetResponse:
        r"""appends a chat message
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appendChatMessage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendChatMessageUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet200ApplicationJSON])
                res.append_chat_message_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet400ApplicationJSON])
                res.append_chat_message_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet401ApplicationJSON])
                res.append_chat_message_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingGet500ApplicationJSON])
                res.append_chat_message_using_get_500_application_json_object = out

        return res

    
    def append_chat_message_using_post(self, request: operations.AppendChatMessageUsingPostRequest) -> operations.AppendChatMessageUsingPostResponse:
        r"""appends a chat message
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/appendChatMessage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendChatMessageUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost200ApplicationJSON])
                res.append_chat_message_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost400ApplicationJSON])
                res.append_chat_message_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost401ApplicationJSON])
                res.append_chat_message_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendChatMessageUsingPost500ApplicationJSON])
                res.append_chat_message_using_post_500_application_json_object = out

        return res

    
    def check_token_using_get(self) -> operations.CheckTokenUsingGetResponse:
        r"""returns ok when the current api token is valid
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/checkToken"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckTokenUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet200ApplicationJSON])
                res.check_token_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet400ApplicationJSON])
                res.check_token_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet401ApplicationJSON])
                res.check_token_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingGet500ApplicationJSON])
                res.check_token_using_get_500_application_json_object = out

        return res

    
    def check_token_using_post(self) -> operations.CheckTokenUsingPostResponse:
        r"""returns ok when the current api token is valid
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/checkToken"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckTokenUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost200ApplicationJSON])
                res.check_token_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost400ApplicationJSON])
                res.check_token_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost401ApplicationJSON])
                res.check_token_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckTokenUsingPost500ApplicationJSON])
                res.check_token_using_post_500_application_json_object = out

        return res

    
    def create_diff_html_using_get(self, request: operations.CreateDiffHTMLUsingGetRequest) -> operations.CreateDiffHTMLUsingGetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createDiffHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDiffHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet200ApplicationJSON])
                res.create_diff_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet400ApplicationJSON])
                res.create_diff_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet401ApplicationJSON])
                res.create_diff_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingGet500ApplicationJSON])
                res.create_diff_html_using_get_500_application_json_object = out

        return res

    
    def create_diff_html_using_post(self, request: operations.CreateDiffHTMLUsingPostRequest) -> operations.CreateDiffHTMLUsingPostResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createDiffHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDiffHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost200ApplicationJSON])
                res.create_diff_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost400ApplicationJSON])
                res.create_diff_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost401ApplicationJSON])
                res.create_diff_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDiffHTMLUsingPost500ApplicationJSON])
                res.create_diff_html_using_post_500_application_json_object = out

        return res

    
    def create_pad_using_get(self, request: operations.CreatePadUsingGetRequest) -> operations.CreatePadUsingGetResponse:
        r"""creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet200ApplicationJSON])
                res.create_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet400ApplicationJSON])
                res.create_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet401ApplicationJSON])
                res.create_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingGet500ApplicationJSON])
                res.create_pad_using_get_500_application_json_object = out

        return res

    
    def create_pad_using_post(self, request: operations.CreatePadUsingPostRequest) -> operations.CreatePadUsingPostResponse:
        r"""creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost200ApplicationJSON])
                res.create_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost400ApplicationJSON])
                res.create_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost401ApplicationJSON])
                res.create_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePadUsingPost500ApplicationJSON])
                res.create_pad_using_post_500_application_json_object = out

        return res

    
    def delete_pad_using_get(self, request: operations.DeletePadUsingGetRequest) -> operations.DeletePadUsingGetResponse:
        r"""deletes a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deletePad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet200ApplicationJSON])
                res.delete_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet400ApplicationJSON])
                res.delete_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet401ApplicationJSON])
                res.delete_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingGet500ApplicationJSON])
                res.delete_pad_using_get_500_application_json_object = out

        return res

    
    def delete_pad_using_post(self, request: operations.DeletePadUsingPostRequest) -> operations.DeletePadUsingPostResponse:
        r"""deletes a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deletePad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost200ApplicationJSON])
                res.delete_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost400ApplicationJSON])
                res.delete_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost401ApplicationJSON])
                res.delete_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePadUsingPost500ApplicationJSON])
                res.delete_pad_using_post_500_application_json_object = out

        return res

    
    def get_chat_head_using_get(self, request: operations.GetChatHeadUsingGetRequest) -> operations.GetChatHeadUsingGetResponse:
        r"""returns the chatHead (chat-message) of the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getChatHead"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHeadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet200ApplicationJSON])
                res.get_chat_head_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet400ApplicationJSON])
                res.get_chat_head_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet401ApplicationJSON])
                res.get_chat_head_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingGet500ApplicationJSON])
                res.get_chat_head_using_get_500_application_json_object = out

        return res

    
    def get_chat_head_using_post(self, request: operations.GetChatHeadUsingPostRequest) -> operations.GetChatHeadUsingPostResponse:
        r"""returns the chatHead (chat-message) of the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getChatHead"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHeadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost200ApplicationJSON])
                res.get_chat_head_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost400ApplicationJSON])
                res.get_chat_head_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost401ApplicationJSON])
                res.get_chat_head_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHeadUsingPost500ApplicationJSON])
                res.get_chat_head_using_post_500_application_json_object = out

        return res

    
    def get_chat_history_using_get(self, request: operations.GetChatHistoryUsingGetRequest) -> operations.GetChatHistoryUsingGetResponse:
        r"""returns the chat history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getChatHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHistoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet200ApplicationJSON])
                res.get_chat_history_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet400ApplicationJSON])
                res.get_chat_history_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet401ApplicationJSON])
                res.get_chat_history_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingGet500ApplicationJSON])
                res.get_chat_history_using_get_500_application_json_object = out

        return res

    
    def get_chat_history_using_post(self, request: operations.GetChatHistoryUsingPostRequest) -> operations.GetChatHistoryUsingPostResponse:
        r"""returns the chat history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getChatHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatHistoryUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost200ApplicationJSON])
                res.get_chat_history_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost400ApplicationJSON])
                res.get_chat_history_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost401ApplicationJSON])
                res.get_chat_history_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatHistoryUsingPost500ApplicationJSON])
                res.get_chat_history_using_post_500_application_json_object = out

        return res

    
    def get_html_using_get(self, request: operations.GetHTMLUsingGetRequest) -> operations.GetHTMLUsingGetResponse:
        r"""returns the text of a pad formatted as HTML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet200ApplicationJSON])
                res.get_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet400ApplicationJSON])
                res.get_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet401ApplicationJSON])
                res.get_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingGet500ApplicationJSON])
                res.get_html_using_get_500_application_json_object = out

        return res

    
    def get_html_using_post(self, request: operations.GetHTMLUsingPostRequest) -> operations.GetHTMLUsingPostResponse:
        r"""returns the text of a pad formatted as HTML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost200ApplicationJSON])
                res.get_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost400ApplicationJSON])
                res.get_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost401ApplicationJSON])
                res.get_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHTMLUsingPost500ApplicationJSON])
                res.get_html_using_post_500_application_json_object = out

        return res

    
    def get_last_edited_using_get(self, request: operations.GetLastEditedUsingGetRequest) -> operations.GetLastEditedUsingGetResponse:
        r"""returns the timestamp of the last revision of the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getLastEdited"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastEditedUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet200ApplicationJSON])
                res.get_last_edited_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet400ApplicationJSON])
                res.get_last_edited_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet401ApplicationJSON])
                res.get_last_edited_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingGet500ApplicationJSON])
                res.get_last_edited_using_get_500_application_json_object = out

        return res

    
    def get_last_edited_using_post(self, request: operations.GetLastEditedUsingPostRequest) -> operations.GetLastEditedUsingPostResponse:
        r"""returns the timestamp of the last revision of the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getLastEdited"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLastEditedUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost200ApplicationJSON])
                res.get_last_edited_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost400ApplicationJSON])
                res.get_last_edited_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost401ApplicationJSON])
                res.get_last_edited_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLastEditedUsingPost500ApplicationJSON])
                res.get_last_edited_using_post_500_application_json_object = out

        return res

    
    def get_public_status_using_get(self, request: operations.GetPublicStatusUsingGetRequest) -> operations.GetPublicStatusUsingGetResponse:
        r"""return true of false
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicStatusUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet200ApplicationJSON])
                res.get_public_status_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet400ApplicationJSON])
                res.get_public_status_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet401ApplicationJSON])
                res.get_public_status_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingGet500ApplicationJSON])
                res.get_public_status_using_get_500_application_json_object = out

        return res

    
    def get_public_status_using_post(self, request: operations.GetPublicStatusUsingPostRequest) -> operations.GetPublicStatusUsingPostResponse:
        r"""return true of false
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicStatusUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost200ApplicationJSON])
                res.get_public_status_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost400ApplicationJSON])
                res.get_public_status_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost401ApplicationJSON])
                res.get_public_status_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPublicStatusUsingPost500ApplicationJSON])
                res.get_public_status_using_post_500_application_json_object = out

        return res

    
    def get_read_only_id_using_get(self, request: operations.GetReadOnlyIDUsingGetRequest) -> operations.GetReadOnlyIDUsingGetResponse:
        r"""returns the read only link of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getReadOnlyID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadOnlyIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet200ApplicationJSON])
                res.get_read_only_id_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet400ApplicationJSON])
                res.get_read_only_id_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet401ApplicationJSON])
                res.get_read_only_id_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingGet500ApplicationJSON])
                res.get_read_only_id_using_get_500_application_json_object = out

        return res

    
    def get_read_only_id_using_post(self, request: operations.GetReadOnlyIDUsingPostRequest) -> operations.GetReadOnlyIDUsingPostResponse:
        r"""returns the read only link of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getReadOnlyID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReadOnlyIDUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost200ApplicationJSON])
                res.get_read_only_id_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost400ApplicationJSON])
                res.get_read_only_id_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost401ApplicationJSON])
                res.get_read_only_id_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReadOnlyIDUsingPost500ApplicationJSON])
                res.get_read_only_id_using_post_500_application_json_object = out

        return res

    
    def get_revisions_count_using_get(self, request: operations.GetRevisionsCountUsingGetRequest) -> operations.GetRevisionsCountUsingGetResponse:
        r"""returns the number of revisions of this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet200ApplicationJSON])
                res.get_revisions_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet400ApplicationJSON])
                res.get_revisions_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet401ApplicationJSON])
                res.get_revisions_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingGet500ApplicationJSON])
                res.get_revisions_count_using_get_500_application_json_object = out

        return res

    
    def get_revisions_count_using_post(self, request: operations.GetRevisionsCountUsingPostRequest) -> operations.GetRevisionsCountUsingPostResponse:
        r"""returns the number of revisions of this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRevisionsCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevisionsCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost200ApplicationJSON])
                res.get_revisions_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost400ApplicationJSON])
                res.get_revisions_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost401ApplicationJSON])
                res.get_revisions_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRevisionsCountUsingPost500ApplicationJSON])
                res.get_revisions_count_using_post_500_application_json_object = out

        return res

    
    def get_text_using_get(self, request: operations.GetTextUsingGetRequest) -> operations.GetTextUsingGetResponse:
        r"""returns the text of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet200ApplicationJSON])
                res.get_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet400ApplicationJSON])
                res.get_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet401ApplicationJSON])
                res.get_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingGet500ApplicationJSON])
                res.get_text_using_get_500_application_json_object = out

        return res

    
    def get_text_using_post(self, request: operations.GetTextUsingPostRequest) -> operations.GetTextUsingPostResponse:
        r"""returns the text of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost200ApplicationJSON])
                res.get_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost400ApplicationJSON])
                res.get_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost401ApplicationJSON])
                res.get_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTextUsingPost500ApplicationJSON])
                res.get_text_using_post_500_application_json_object = out

        return res

    
    def list_all_pads_using_get(self) -> operations.ListAllPadsUsingGetResponse:
        r"""list all the pads
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAllPads"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllPadsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet200ApplicationJSON])
                res.list_all_pads_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet400ApplicationJSON])
                res.list_all_pads_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet401ApplicationJSON])
                res.list_all_pads_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingGet500ApplicationJSON])
                res.list_all_pads_using_get_500_application_json_object = out

        return res

    
    def list_all_pads_using_post(self) -> operations.ListAllPadsUsingPostResponse:
        r"""list all the pads
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAllPads"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAllPadsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost200ApplicationJSON])
                res.list_all_pads_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost400ApplicationJSON])
                res.list_all_pads_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost401ApplicationJSON])
                res.list_all_pads_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAllPadsUsingPost500ApplicationJSON])
                res.list_all_pads_using_post_500_application_json_object = out

        return res

    
    def list_authors_of_pad_using_get(self, request: operations.ListAuthorsOfPadUsingGetRequest) -> operations.ListAuthorsOfPadUsingGetResponse:
        r"""returns an array of authors who contributed to this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAuthorsOfPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAuthorsOfPadUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet200ApplicationJSON])
                res.list_authors_of_pad_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet400ApplicationJSON])
                res.list_authors_of_pad_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet401ApplicationJSON])
                res.list_authors_of_pad_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingGet500ApplicationJSON])
                res.list_authors_of_pad_using_get_500_application_json_object = out

        return res

    
    def list_authors_of_pad_using_post(self, request: operations.ListAuthorsOfPadUsingPostRequest) -> operations.ListAuthorsOfPadUsingPostResponse:
        r"""returns an array of authors who contributed to this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listAuthorsOfPad"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAuthorsOfPadUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost200ApplicationJSON])
                res.list_authors_of_pad_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost400ApplicationJSON])
                res.list_authors_of_pad_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost401ApplicationJSON])
                res.list_authors_of_pad_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAuthorsOfPadUsingPost500ApplicationJSON])
                res.list_authors_of_pad_using_post_500_application_json_object = out

        return res

    
    def pad_users_count_using_get(self, request: operations.PadUsersCountUsingGetRequest) -> operations.PadUsersCountUsingGetResponse:
        r"""returns the number of user that are currently editing this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/padUsersCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet200ApplicationJSON])
                res.pad_users_count_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet400ApplicationJSON])
                res.pad_users_count_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet401ApplicationJSON])
                res.pad_users_count_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingGet500ApplicationJSON])
                res.pad_users_count_using_get_500_application_json_object = out

        return res

    
    def pad_users_count_using_post(self, request: operations.PadUsersCountUsingPostRequest) -> operations.PadUsersCountUsingPostResponse:
        r"""returns the number of user that are currently editing this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/padUsersCount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersCountUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost200ApplicationJSON])
                res.pad_users_count_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost400ApplicationJSON])
                res.pad_users_count_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost401ApplicationJSON])
                res.pad_users_count_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersCountUsingPost500ApplicationJSON])
                res.pad_users_count_using_post_500_application_json_object = out

        return res

    
    def pad_users_using_get(self, request: operations.PadUsersUsingGetRequest) -> operations.PadUsersUsingGetResponse:
        r"""returns the list of users that are currently editing this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/padUsers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet200ApplicationJSON])
                res.pad_users_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet400ApplicationJSON])
                res.pad_users_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet401ApplicationJSON])
                res.pad_users_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingGet500ApplicationJSON])
                res.pad_users_using_get_500_application_json_object = out

        return res

    
    def pad_users_using_post(self, request: operations.PadUsersUsingPostRequest) -> operations.PadUsersUsingPostResponse:
        r"""returns the list of users that are currently editing this pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/padUsers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PadUsersUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost200ApplicationJSON])
                res.pad_users_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost400ApplicationJSON])
                res.pad_users_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost401ApplicationJSON])
                res.pad_users_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PadUsersUsingPost500ApplicationJSON])
                res.pad_users_using_post_500_application_json_object = out

        return res

    
    def send_clients_message_using_get(self, request: operations.SendClientsMessageUsingGetRequest) -> operations.SendClientsMessageUsingGetResponse:
        r"""sends a custom message of type msg to the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sendClientsMessage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendClientsMessageUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet200ApplicationJSON])
                res.send_clients_message_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet400ApplicationJSON])
                res.send_clients_message_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet401ApplicationJSON])
                res.send_clients_message_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingGet500ApplicationJSON])
                res.send_clients_message_using_get_500_application_json_object = out

        return res

    
    def send_clients_message_using_post(self, request: operations.SendClientsMessageUsingPostRequest) -> operations.SendClientsMessageUsingPostResponse:
        r"""sends a custom message of type msg to the pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sendClientsMessage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendClientsMessageUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost200ApplicationJSON])
                res.send_clients_message_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost400ApplicationJSON])
                res.send_clients_message_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost401ApplicationJSON])
                res.send_clients_message_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendClientsMessageUsingPost500ApplicationJSON])
                res.send_clients_message_using_post_500_application_json_object = out

        return res

    
    def set_html_using_get(self, request: operations.SetHTMLUsingGetRequest) -> operations.SetHTMLUsingGetResponse:
        r"""sets the text of a pad with HTML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHTMLUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet200ApplicationJSON])
                res.set_html_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet400ApplicationJSON])
                res.set_html_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet401ApplicationJSON])
                res.set_html_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingGet500ApplicationJSON])
                res.set_html_using_get_500_application_json_object = out

        return res

    
    def set_html_using_post(self, request: operations.SetHTMLUsingPostRequest) -> operations.SetHTMLUsingPostResponse:
        r"""sets the text of a pad with HTML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setHTML"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetHTMLUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost200ApplicationJSON])
                res.set_html_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost400ApplicationJSON])
                res.set_html_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost401ApplicationJSON])
                res.set_html_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetHTMLUsingPost500ApplicationJSON])
                res.set_html_using_post_500_application_json_object = out

        return res

    
    def set_public_status_using_get(self, request: operations.SetPublicStatusUsingGetRequest) -> operations.SetPublicStatusUsingGetResponse:
        r"""sets a boolean for the public status of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPublicStatusUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet200ApplicationJSON])
                res.set_public_status_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet400ApplicationJSON])
                res.set_public_status_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet401ApplicationJSON])
                res.set_public_status_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingGet500ApplicationJSON])
                res.set_public_status_using_get_500_application_json_object = out

        return res

    
    def set_public_status_using_post(self, request: operations.SetPublicStatusUsingPostRequest) -> operations.SetPublicStatusUsingPostResponse:
        r"""sets a boolean for the public status of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setPublicStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetPublicStatusUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost200ApplicationJSON])
                res.set_public_status_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost400ApplicationJSON])
                res.set_public_status_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost401ApplicationJSON])
                res.set_public_status_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetPublicStatusUsingPost500ApplicationJSON])
                res.set_public_status_using_post_500_application_json_object = out

        return res

    
    def set_text_using_get(self, request: operations.SetTextUsingGetRequest) -> operations.SetTextUsingGetResponse:
        r"""sets the text of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTextUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet200ApplicationJSON])
                res.set_text_using_get_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet400ApplicationJSON])
                res.set_text_using_get_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet401ApplicationJSON])
                res.set_text_using_get_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingGet500ApplicationJSON])
                res.set_text_using_get_500_application_json_object = out

        return res

    
    def set_text_using_post(self, request: operations.SetTextUsingPostRequest) -> operations.SetTextUsingPostResponse:
        r"""sets the text of a pad
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTextUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost200ApplicationJSON])
                res.set_text_using_post_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost400ApplicationJSON])
                res.set_text_using_post_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost401ApplicationJSON])
                res.set_text_using_post_401_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetTextUsingPost500ApplicationJSON])
                res.set_text_using_post_500_application_json_object = out

        return res

    