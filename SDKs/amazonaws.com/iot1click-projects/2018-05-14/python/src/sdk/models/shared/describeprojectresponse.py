import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectdescription as shared_projectdescription


@dataclass_json
@dataclasses.dataclass
class DescribeProjectResponse:
    project: shared_projectdescription.ProjectDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
