import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bytematchsetupdate as shared_bytematchsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateByteMatchSetRequest:
    byte_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSetId') }})
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    updates: list[shared_bytematchsetupdate.ByteMatchSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
