import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectdescription as shared_projectdescription


@dataclass_json
@dataclasses.dataclass
class DescribeProjectsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    project_descriptions: Optional[list[shared_projectdescription.ProjectDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectDescriptions') }})
    
