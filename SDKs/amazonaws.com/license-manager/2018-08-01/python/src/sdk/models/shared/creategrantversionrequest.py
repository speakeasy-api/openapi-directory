import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowedoperation_enum as shared_allowedoperation_enum
from ..shared import grantstatus_enum as shared_grantstatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateGrantVersionRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    grant_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantArn') }})
    allowed_operations: Optional[list[shared_allowedoperation_enum.AllowedOperationEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    grant_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantName') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceVersion') }})
    status: Optional[shared_grantstatus_enum.GrantStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReason') }})
    
