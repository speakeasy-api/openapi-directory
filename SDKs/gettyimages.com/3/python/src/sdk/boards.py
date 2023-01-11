import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Boards:
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

    
    def delete_v3_boards_board_id_(self, request: operations.DeleteV3BoardsBoardIDRequest) -> operations.DeleteV3BoardsBoardIDResponse:
        r"""Delete a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_assets(self, request: operations.DeleteV3BoardsBoardIDAssetsRequest) -> operations.DeleteV3BoardsBoardIDAssetsResponse:
        r"""Remove assets from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_assets_asset_id_(self, request: operations.DeleteV3BoardsBoardIDAssetsAssetIDRequest) -> operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse:
        r"""Remove an asset from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets/{asset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDAssetsAssetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_v3_boards_board_id_comments_comment_id_(self, request: operations.DeleteV3BoardsBoardIDCommentsCommentIDRequest) -> operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse:
        r"""Delete a comment from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments/{comment_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteV3BoardsBoardIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_boards(self, request: operations.GetV3BoardsRequest) -> operations.GetV3BoardsResponse:
        r"""Get all boards that the user participates in
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/boards"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardList])
                res.board_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_v3_boards_board_id_(self, request: operations.GetV3BoardsBoardIDRequest) -> operations.GetV3BoardsBoardIDResponse:
        r"""Get assets and metadata for a specific board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardDetail])
                res.board_detail = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_v3_boards_board_id_comments(self, request: operations.GetV3BoardsBoardIDCommentsRequest) -> operations.GetV3BoardsBoardIDCommentsResponse:
        r"""Get comments from a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3BoardsBoardIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentsList])
                res.comments_list = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_v3_boards(self, request: operations.PostV3BoardsRequest) -> operations.PostV3BoardsResponse:
        r"""Create a new board
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/boards"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3BoardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoardCreated])
                res.board_created = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def post_v3_boards_board_id_comments(self, request: operations.PostV3BoardsBoardIDCommentsRequest) -> operations.PostV3BoardsBoardIDCommentsResponse:
        r"""Add a comment to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV3BoardsBoardIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentCreated])
                res.comment_created = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_(self, request: operations.PutV3BoardsBoardIDRequest) -> operations.PutV3BoardsBoardIDResponse:
        r"""Update a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_assets(self, request: operations.PutV3BoardsBoardIDAssetsRequest) -> operations.PutV3BoardsBoardIDAssetsResponse:
        r"""Add assets to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddBoardAssetsResult])
                res.add_board_assets_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def put_v3_boards_board_id_assets_asset_id_(self, request: operations.PutV3BoardsBoardIDAssetsAssetIDRequest) -> operations.PutV3BoardsBoardIDAssetsAssetIDResponse:
        r"""Add an asset to a board
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/boards/{board_id}/assets/{asset_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutV3BoardsBoardIDAssetsAssetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    