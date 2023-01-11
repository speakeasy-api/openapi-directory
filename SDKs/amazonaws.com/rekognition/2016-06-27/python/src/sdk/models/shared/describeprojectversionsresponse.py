import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectversiondescription as shared_projectversiondescription


@dataclass_json
@dataclasses.dataclass
class DescribeProjectVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    project_version_descriptions: Optional[list[shared_projectversiondescription.ProjectVersionDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionDescriptions') }})
    
