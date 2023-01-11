import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteServiceTemplateVersionInput:
    major_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    
