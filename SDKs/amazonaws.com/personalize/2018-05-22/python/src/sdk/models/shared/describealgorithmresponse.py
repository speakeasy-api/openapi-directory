import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import algorithm as shared_algorithm


@dataclass_json
@dataclasses.dataclass
class DescribeAlgorithmResponse:
    algorithm: Optional[shared_algorithm.Algorithm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    
