import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplatesummary as shared_servicetemplatesummary


@dataclass_json
@dataclasses.dataclass
class ListServiceTemplatesOutput:
    templates: list[shared_servicetemplatesummary.ServiceTemplateSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
