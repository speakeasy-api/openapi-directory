import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicesummary as shared_servicesummary


@dataclass_json
@dataclasses.dataclass
class ListServicesOutput:
    services: list[shared_servicesummary.ServiceSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
