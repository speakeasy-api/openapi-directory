import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codecoverage as shared_codecoverage


@dataclass_json
@dataclasses.dataclass
class DescribeCodeCoveragesOutput:
    code_coverages: Optional[list[shared_codecoverage.CodeCoverage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeCoverages') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
