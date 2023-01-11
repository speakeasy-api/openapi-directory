import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceImagePermissionRequest:
    allow_copy_image: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCopyImage') }})
    image_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageId') }})
    shared_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedAccountId') }})
    
