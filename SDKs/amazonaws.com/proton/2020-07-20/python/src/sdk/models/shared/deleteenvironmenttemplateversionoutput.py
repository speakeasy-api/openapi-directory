import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplateversion as shared_environmenttemplateversion


@dataclass_json
@dataclasses.dataclass
class DeleteEnvironmentTemplateVersionOutput:
    environment_template_version: Optional[shared_environmenttemplateversion.EnvironmentTemplateVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTemplateVersion') }})
    
