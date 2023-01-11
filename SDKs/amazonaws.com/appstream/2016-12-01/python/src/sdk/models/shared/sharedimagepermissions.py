import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagepermissions as shared_imagepermissions


@dataclass_json
@dataclasses.dataclass
class SharedImagePermissions:
    r"""SharedImagePermissions
    Describes the permissions that are available to the specified AWS account for a shared image.
    """
    
    image_permissions: shared_imagepermissions.ImagePermissions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePermissions') }})
    shared_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAccountId') }})
    
