import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DisassociateHealthCheckRequest:
    health_check_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckArn') }})
    protection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionId') }})
    
