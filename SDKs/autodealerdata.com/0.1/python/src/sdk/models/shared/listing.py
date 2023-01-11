import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Listing:
    ask_price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('askPrice') }})
    brand_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    dealer_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealerID') }})
    first_seen: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_new: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNew') }})
    last_seen: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    msrp: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msrp') }})
    vin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vin') }})
    year: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    interior_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interiorColor') }})
    mileage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mileage') }})
    vin_decode: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vinDecode') }})
    
