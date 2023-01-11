import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selfservicepermissions as shared_selfservicepermissions


@dataclass_json
@dataclasses.dataclass
class ModifySelfservicePermissionsRequest:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    selfservice_permissions: shared_selfservicepermissions.SelfservicePermissions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfservicePermissions') }})
    
