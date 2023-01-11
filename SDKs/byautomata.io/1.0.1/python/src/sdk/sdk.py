
__doc__ = """ SDK Documentation: http://byautomata.io - Find out more about Automata and other Market Intelligence products."""
import requests

from . import utils

from .contentpro_search import ContentproSearch
from .contentpro_similar_text import ContentproSimilarText
from .search import Search
from .similar import Similar


SERVERS = [
	"https://api.byautomata.io",
]


class SDK:
    r"""SDK Documentation: http://byautomata.io - Find out more about Automata and other Market Intelligence products."""
    contentpro_search: ContentproSearch
    contentpro_similar_text: ContentproSimilarText
    search: Search
    similar: Similar

    _client: requests.Session
    _security_client: requests.Session
    
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
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.contentpro_search = ContentproSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.contentpro_similar_text = ContentproSimilarText(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.search = Search(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.similar = Similar(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    