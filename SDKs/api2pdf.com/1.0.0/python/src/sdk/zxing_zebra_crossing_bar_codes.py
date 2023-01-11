import requests
from sdk.models import operations
from . import utils

class ZxingZebraCrossingBarCodes:
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

    
    def zebra_get(self, request: operations.ZebraGetRequest) -> operations.ZebraGetResponse:
        r"""Generate bar codes and QR codes with ZXING.
        See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
        ### Authorize via Query String Parameter
        **apikey=YOUR-API-KEY**
        ### Example
        ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/zebra"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ZebraGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/png"):
                res.zebra_get_200_image_png_binary_string = r.content

        return res

    