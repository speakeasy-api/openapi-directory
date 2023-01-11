import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplatesummary as shared_environmenttemplatesummary


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentTemplatesOutput:
    templates: list[shared_environmenttemplatesummary.EnvironmentTemplateSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
