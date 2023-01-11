import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CompatibleEnvironmentTemplate:
    r"""CompatibleEnvironmentTemplate
    Compatible environment template data.
    """
    
    major_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    
