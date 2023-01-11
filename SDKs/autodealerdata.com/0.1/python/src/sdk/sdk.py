

import requests

from . import utils

from .application_acceleration import ApplicationAcceleration
from .authentication import Authentication
from .dealership_data import DealershipData
from .premium import Premium
from .pricing_data import PricingData
from .pro_plan_or_greater import ProPlanOrGreater
from .sales_data import SalesData
from .standard_plan_or_greater import StandardPlanOrGreater
from .static_data import StaticData
from .supply_data import SupplyData
from .ultra_plan_or_greater import UltraPlanOrGreater
from .vehicle_data import VehicleData


SERVERS = [
	"https://autodealerdata.com",
]


class SDK:
    
    application_acceleration: ApplicationAcceleration
    authentication: Authentication
    dealership_data: DealershipData
    premium: Premium
    pricing_data: PricingData
    pro_plan_or_greater: ProPlanOrGreater
    sales_data: SalesData
    standard_plan_or_greater: StandardPlanOrGreater
    static_data: StaticData
    supply_data: SupplyData
    ultra_plan_or_greater: UltraPlanOrGreater
    vehicle_data: VehicleData

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
        
        self.application_acceleration = ApplicationAcceleration(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.authentication = Authentication(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dealership_data = DealershipData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.premium = Premium(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pricing_data = PricingData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pro_plan_or_greater = ProPlanOrGreater(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sales_data = SalesData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.standard_plan_or_greater = StandardPlanOrGreater(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.static_data = StaticData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.supply_data = SupplyData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ultra_plan_or_greater = UltraPlanOrGreater(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vehicle_data = VehicleData(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    