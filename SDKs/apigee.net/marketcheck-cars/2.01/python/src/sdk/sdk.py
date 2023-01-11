

import requests

from . import utils

from .crm_cleanse_api import CrmCleanseAPI
from .car_cached_image import CarCachedImage
from .car_search import CarSearch
from .cars_history_api import CarsHistoryAPI
from .cars_market_api import CarsMarketAPI
from .dealer_api import DealerAPI
from .heavy_equipment_search import HeavyEquipmentSearch
from .motorcycle_search import MotorcycleSearch
from .oem_incentive_search import OemIncentiveSearch
from .rv_search import RvSearch
from .rank_car_listings import RankCarListings
from .recall_search import RecallSearch
from .vin_decoder_api import VinDecoderAPI


SERVERS = [
	"https://marketcheck-prod.apigee.net/v2",
]


class SDK:
    
    crm_cleanse_api: CrmCleanseAPI
    car_cached_image: CarCachedImage
    car_search: CarSearch
    cars_history_api: CarsHistoryAPI
    cars_market_api: CarsMarketAPI
    dealer_api: DealerAPI
    heavy_equipment_search: HeavyEquipmentSearch
    motorcycle_search: MotorcycleSearch
    oem_incentive_search: OemIncentiveSearch
    rv_search: RvSearch
    rank_car_listings: RankCarListings
    recall_search: RecallSearch
    vin_decoder_api: VinDecoderAPI

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
        
        self.crm_cleanse_api = CrmCleanseAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.car_cached_image = CarCachedImage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.car_search = CarSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cars_history_api = CarsHistoryAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cars_market_api = CarsMarketAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dealer_api = DealerAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.heavy_equipment_search = HeavyEquipmentSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.motorcycle_search = MotorcycleSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.oem_incentive_search = OemIncentiveSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rv_search = RvSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rank_car_listings = RankCarListings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.recall_search = RecallSearch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vin_decoder_api = VinDecoderAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    