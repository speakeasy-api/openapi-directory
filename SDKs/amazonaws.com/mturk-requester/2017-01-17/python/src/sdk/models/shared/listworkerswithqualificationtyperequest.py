import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualificationstatus_enum as shared_qualificationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListWorkersWithQualificationTypeRequest:
    qualification_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[shared_qualificationstatus_enum.QualificationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
