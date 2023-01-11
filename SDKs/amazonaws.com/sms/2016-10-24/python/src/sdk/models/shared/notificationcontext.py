import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationstatus_enum as shared_validationstatus_enum


@dataclass_json
@dataclasses.dataclass
class NotificationContext:
    r"""NotificationContext
    Contains the status of validating an application.
    """
    
    status: Optional[shared_validationstatus_enum.ValidationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    validation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
