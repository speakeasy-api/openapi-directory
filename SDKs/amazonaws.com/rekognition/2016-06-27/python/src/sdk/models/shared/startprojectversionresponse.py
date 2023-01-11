import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectversionstatus_enum as shared_projectversionstatus_enum


@dataclass_json
@dataclasses.dataclass
class StartProjectVersionResponse:
    status: Optional[shared_projectversionstatus_enum.ProjectVersionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
