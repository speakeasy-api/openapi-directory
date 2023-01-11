import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrationstatus_enum as shared_registrationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListWorkflowTypesInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    registration_status: shared_registrationstatus_enum.RegistrationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationStatus') }})
    maximum_page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPageSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reverse_order: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseOrder') }})
    
