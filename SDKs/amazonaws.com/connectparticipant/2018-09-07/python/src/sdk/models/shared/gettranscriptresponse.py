import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import item as shared_item


@dataclass_json
@dataclasses.dataclass
class GetTranscriptResponse:
    initial_contact_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialContactId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    transcript: Optional[list[shared_item.Item]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transcript') }})
    
