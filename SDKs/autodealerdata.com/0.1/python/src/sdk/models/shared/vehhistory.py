import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VehHistory:
    dealer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealerName') }})
    first_seen: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    miles: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    new: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
