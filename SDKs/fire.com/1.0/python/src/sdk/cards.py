import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Cards:
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

    
    def create_new_card(self, request: operations.CreateNewCardRequest) -> operations.CreateNewCardResponse:
        r"""Create a new debit card.
        You can create multiple debit cards which can be linked to your fire.com accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cards"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNewCardNewCardResponse])
                res.new_card_response = out

        return res

    
    def get_listof_cards(self) -> operations.GetListofCardsResponse:
        r"""View List of Cards.
        Returns a list of cards related to your fire.com account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cards"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListofCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListofCardsCards])
                res.cards = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    