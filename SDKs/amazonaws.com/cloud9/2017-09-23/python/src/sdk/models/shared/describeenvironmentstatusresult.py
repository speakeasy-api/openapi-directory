import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentstatus_enum as shared_environmentstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeEnvironmentStatusResult:
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: shared_environmentstatus_enum.EnvironmentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
