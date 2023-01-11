import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaChargeState:
    charge_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    is_charging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCharging') }})
    is_plugged_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPluggedIn') }})
    

@dataclass_json
@dataclasses.dataclass
class Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation:
    r"""Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation
    Descriptive information about the Charger
    """
    
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclasses.dataclass
class Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchema:
    charge_state: Optional[Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaChargeState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeState') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    information: Optional[Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchemaInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    is_reachable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReachable') }})
    last_seen: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
