import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modelstatus_enum as shared_modelstatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateModelResponse:
    model_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    status: Optional[shared_modelstatus_enum.ModelStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
