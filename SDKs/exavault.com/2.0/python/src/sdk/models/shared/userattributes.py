import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpermissions as shared_userpermissions

class UserAttributesRoleEnum(str, Enum):
    USER = "user"
    ADMIN = "admin"
    MASTER = "master"


@dataclass_json
@dataclasses.dataclass
class UserAttributes:
    r"""UserAttributes
    Attributes of the user including expiration, home directory, and permissions. 
    """
    
    account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    created: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    onboarding: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboarding') }})
    permissions: shared_userpermissions.UserPermissions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    role: UserAttributesRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    access_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTimestamp') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    first_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLogin') }})
    home_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homePath') }})
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    
