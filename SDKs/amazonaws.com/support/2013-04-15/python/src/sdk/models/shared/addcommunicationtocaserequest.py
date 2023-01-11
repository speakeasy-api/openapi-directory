import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddCommunicationToCaseRequest:
    communication_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationBody') }})
    attachment_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSetId') }})
    case_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    cc_email_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccEmailAddresses') }})
    
