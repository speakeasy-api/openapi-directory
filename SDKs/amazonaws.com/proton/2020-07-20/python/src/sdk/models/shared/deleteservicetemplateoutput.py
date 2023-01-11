import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplate as shared_servicetemplate


@dataclass_json
@dataclasses.dataclass
class DeleteServiceTemplateOutput:
    service_template: Optional[shared_servicetemplate.ServiceTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTemplate') }})
    
