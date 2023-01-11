
__doc__ = """ SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf"""
import requests
from sdk.models import shared
from . import utils

from .headless_chrome import HeadlessChrome
from .libreoffice import LibreOffice
from .merge_combine_pdfs import MergeCombinePdfs
from .zxing_zebra_crossing_bar_codes import ZxingZebraCrossingBarCodes
from .wkhtmltopdf import Wkhtmltopdf


SERVERS = [
	"https://v2018.api2pdf.com",
]


class SDK:
    r"""SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf"""
    headless_chrome: HeadlessChrome
    libre_office: LibreOffice
    merge_combine_pdfs: MergeCombinePdfs
    zxing_zebra_crossing_bar_codes: ZxingZebraCrossingBarCodes
    wkhtmltopdf: Wkhtmltopdf

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
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.headless_chrome = HeadlessChrome(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.libre_office = LibreOffice(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.merge_combine_pdfs = MergeCombinePdfs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.zxing_zebra_crossing_bar_codes = ZxingZebraCrossingBarCodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wkhtmltopdf = Wkhtmltopdf(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    