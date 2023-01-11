import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplateversion as shared_servicetemplateversion


@dataclass_json
@dataclasses.dataclass
class CreateServiceTemplateVersionOutput:
    service_template_version: shared_servicetemplateversion.ServiceTemplateVersion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTemplateVersion') }})
    
