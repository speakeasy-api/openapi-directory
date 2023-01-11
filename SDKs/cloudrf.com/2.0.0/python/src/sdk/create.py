import requests
from sdk.models import operations
from . import utils

class Create:
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

    
    def area(self, request: operations.AreaRequest) -> operations.AreaResponse:
        r"""Create a point-to-multipoint heatmap
        An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/area"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AreaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def path(self, request: operations.PathRequest) -> operations.PathResponse:
        r"""Point-to-point path profile analysis (Tx to Rx)
        A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/path"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def points(self, request: operations.PointsRequest) -> operations.PointsResponse:
        r"""Point-to-multipoint path profile analysis (Many Tx, one Rx)
        The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/points"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    