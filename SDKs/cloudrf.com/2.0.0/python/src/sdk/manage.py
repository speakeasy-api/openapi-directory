import requests
from sdk.models import operations
from . import utils

class Manage:
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

    
    def add_clutter(self, request: operations.AddClutterRequest) -> operations.AddClutterResponse:
        r"""Upload clutter data as GeoJSON
        Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/clutter/add"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddClutterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete(self, request: operations.DeleteRequest) -> operations.DeleteResponse:
        r"""Delete a calculation from the database.
        Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/archive/delete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_network(self, request: operations.DeleteNetworkRequest) -> operations.DeleteNetworkResponse:
        r"""Delete an entire network
        Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/archive/delete/network"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def export(self, request: operations.ExportRequest) -> operations.ExportResponse:
        r"""Export a calculation in a GIS file format
        Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/archive/export"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def list(self, request: operations.ListRequest) -> operations.ListResponse:
        r"""List calculations from your archive
        List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/archive/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    