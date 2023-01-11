import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceintegrationconfig as shared_serviceintegrationconfig


@dataclass_json
@dataclasses.dataclass
class DescribeServiceIntegrationResponse:
    service_integration: Optional[shared_serviceintegrationconfig.ServiceIntegrationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIntegration') }})
    
