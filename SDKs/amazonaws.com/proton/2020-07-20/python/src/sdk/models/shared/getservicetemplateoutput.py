import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplate as shared_servicetemplate


@dataclass_json
@dataclasses.dataclass
class GetServiceTemplateOutput:
    service_template: shared_servicetemplate.ServiceTemplate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTemplate') }})
    
