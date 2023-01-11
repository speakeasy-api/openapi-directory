import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateVpceConfigurationRequest:
    service_dns_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDnsName') }})
    vpce_configuration_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationName') }})
    vpce_service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceServiceName') }})
    vpce_configuration_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationDescription') }})
    
