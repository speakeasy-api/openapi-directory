import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibleenvironmenttemplateinput as shared_compatibleenvironmenttemplateinput
from ..shared import templateversionsourceinput as shared_templateversionsourceinput
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateServiceTemplateVersionInput:
    compatible_environment_templates: list[shared_compatibleenvironmenttemplateinput.CompatibleEnvironmentTemplateInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleEnvironmentTemplates') }})
    source: shared_templateversionsourceinput.TemplateVersionSourceInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    major_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
