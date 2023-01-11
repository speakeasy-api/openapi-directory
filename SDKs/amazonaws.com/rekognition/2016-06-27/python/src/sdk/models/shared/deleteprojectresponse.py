import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectstatus_enum as shared_projectstatus_enum


@dataclass_json
@dataclasses.dataclass
class DeleteProjectResponse:
    status: Optional[shared_projectstatus_enum.ProjectStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
