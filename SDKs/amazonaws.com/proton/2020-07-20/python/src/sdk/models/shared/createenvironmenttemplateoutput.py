import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplate as shared_environmenttemplate


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentTemplateOutput:
    environment_template: shared_environmenttemplate.EnvironmentTemplate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTemplate') }})
    
