import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplateversion as shared_servicetemplateversion


@dataclass_json
@dataclasses.dataclass
class DeleteServiceTemplateVersionOutput:
    service_template_version: Optional[shared_servicetemplateversion.ServiceTemplateVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTemplateVersion') }})
    
