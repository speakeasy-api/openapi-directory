import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagepermissions as shared_imagepermissions


@dataclass_json
@dataclasses.dataclass
class UpdateImagePermissionsRequest:
    image_permissions: shared_imagepermissions.ImagePermissions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImagePermissions') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    shared_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedAccountId') }})
    
