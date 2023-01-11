import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdatePrimaryRegionRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    primary_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryRegion') }})
    
