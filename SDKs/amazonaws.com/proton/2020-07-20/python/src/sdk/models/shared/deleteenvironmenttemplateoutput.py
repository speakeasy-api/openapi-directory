import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplate as shared_environmenttemplate


@dataclass_json
@dataclasses.dataclass
class DeleteEnvironmentTemplateOutput:
    environment_template: Optional[shared_environmenttemplate.EnvironmentTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTemplate') }})
    
