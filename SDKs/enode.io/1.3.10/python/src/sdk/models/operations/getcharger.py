import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onechargers_get_parameters_0_enum as shared_onechargers_get_parameters_0_enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetChargerPathParams:
    charger_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chargerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChargerQueryParams:
    field_: Optional[list[shared_onechargers_get_parameters_0_enum.OnechargersGetParameters0Enum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChargerSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token2: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetCharger200ApplicationJSONChargeState:
    charge_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    is_charging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCharging') }})
    is_plugged_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPluggedIn') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCharger200ApplicationJSONInformation:
    r"""GetCharger200ApplicationJSONInformation
    Descriptive information about the Charger
    """
    
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCharger200ApplicationJSON:
    charge_state: Optional[GetCharger200ApplicationJSONChargeState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeState') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    information: Optional[GetCharger200ApplicationJSONInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    is_reachable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReachable') }})
    last_seen: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclasses.dataclass
class GetChargerRequest:
    path_params: GetChargerPathParams = dataclasses.field()
    query_params: GetChargerQueryParams = dataclasses.field()
    security: GetChargerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChargerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_charger_200_application_json_object: Optional[GetCharger200ApplicationJSON] = dataclasses.field(default=None)
    
