import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analysisstatus_enum as shared_analysisstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeDetectorModelAnalysisResponse:
    status: Optional[shared_analysisstatus_enum.AnalysisStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
