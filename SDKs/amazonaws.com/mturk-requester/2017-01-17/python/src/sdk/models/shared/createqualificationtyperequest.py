import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualificationtypestatus_enum as shared_qualificationtypestatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateQualificationTypeRequest:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    qualification_type_status: shared_qualificationtypestatus_enum.QualificationTypeStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeStatus') }})
    answer_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnswerKey') }})
    auto_granted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGranted') }})
    auto_granted_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoGrantedValue') }})
    keywords: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    retry_delay_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryDelayInSeconds') }})
    test: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Test') }})
    test_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestDurationInSeconds') }})
    
