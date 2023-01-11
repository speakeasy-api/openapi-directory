import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import service as shared_service


@dataclass_json
@dataclasses.dataclass
class CreateServiceOutput:
    service: shared_service.Service = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
