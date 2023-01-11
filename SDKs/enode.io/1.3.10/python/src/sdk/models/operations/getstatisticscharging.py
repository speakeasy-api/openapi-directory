import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetStatisticsChargingResolutionEnum(str, Enum):
    HOUR = "HOUR"
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclasses.dataclass
class GetStatisticsChargingQueryParams:
    start_date: date = dataclasses.field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    charging_location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chargingLocationId', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    resolution: Optional[GetStatisticsChargingResolutionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    vehicle_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicleId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatisticsChargingSecurity:
    user_access_token: shared_security.SchemeUserAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsCharging200ApplicationJSONKw:
    r"""GetStatisticsCharging200ApplicationJSONKw
    Aggregate statistics for charge rate in kW
    """
    
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    mean: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    min: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsCharging200ApplicationJSONPrice:
    r"""GetStatisticsCharging200ApplicationJSONPrice
    Aggregate statistics for power price (<CURRENCY> per kWh)
    """
    
    max: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    mean: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    min: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsCharging200ApplicationJSON:
    cost_sum: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costSum') }})
    date_: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kw: GetStatisticsCharging200ApplicationJSONKw = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kw') }})
    kwh_sum: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kwhSum') }})
    price: GetStatisticsCharging200ApplicationJSONPrice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclasses.dataclass
class GetStatisticsChargingRequest:
    query_params: GetStatisticsChargingQueryParams = dataclasses.field()
    security: GetStatisticsChargingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetStatisticsChargingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_statistics_charging_200_application_json_objects: Optional[list[GetStatisticsCharging200ApplicationJSON]] = dataclasses.field(default=None)
    
