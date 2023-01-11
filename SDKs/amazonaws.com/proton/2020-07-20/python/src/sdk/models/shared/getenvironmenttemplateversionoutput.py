import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplateversion as shared_environmenttemplateversion


@dataclass_json
@dataclasses.dataclass
class GetEnvironmentTemplateVersionOutput:
    environment_template_version: shared_environmenttemplateversion.EnvironmentTemplateVersion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTemplateVersion') }})
    
