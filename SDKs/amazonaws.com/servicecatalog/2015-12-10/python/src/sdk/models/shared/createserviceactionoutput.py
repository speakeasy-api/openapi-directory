import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactiondetail as shared_serviceactiondetail


@dataclass_json
@dataclasses.dataclass
class CreateServiceActionOutput:
    service_action_detail: Optional[shared_serviceactiondetail.ServiceActionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionDetail') }})
    
