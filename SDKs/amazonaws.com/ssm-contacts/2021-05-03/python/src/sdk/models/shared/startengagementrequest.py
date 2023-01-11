import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartEngagementRequest:
    contact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    sender: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    idempotency_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    incident_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncidentId') }})
    public_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicContent') }})
    public_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicSubject') }})
    
