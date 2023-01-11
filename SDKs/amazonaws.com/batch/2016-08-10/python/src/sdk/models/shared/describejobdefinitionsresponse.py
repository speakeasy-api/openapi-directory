import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobdefinition as shared_jobdefinition


@dataclass_json
@dataclasses.dataclass
class DescribeJobDefinitionsResponse:
    job_definitions: Optional[list[shared_jobdefinition.JobDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
