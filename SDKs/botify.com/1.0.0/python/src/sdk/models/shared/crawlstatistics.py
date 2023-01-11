import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CrawlStatistics:
    depth_current: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth_current') }})
    last_upd_dt: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_upd_dt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pages_dones: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones') }})
    pages_dones_2xx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_2xx') }})
    pages_dones_3xx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_3xx') }})
    pages_dones_4xx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_4xx') }})
    pages_dones_5xx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_5xx') }})
    pages_dones_networkerror: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_networkerror') }})
    pages_dones_xxx: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_dones_xxx') }})
    pages_known: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages_known') }})
    
