import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributetype as shared_attributetype
from ..shared import mfaoptiontype as shared_mfaoptiontype
from ..shared import userstatustype_enum as shared_userstatustype_enum


@dataclass_json
@dataclasses.dataclass
class UserType:
    r"""UserType
    The user type.
    """
    
    attributes: Optional[list[shared_attributetype.AttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    mfa_options: Optional[list[shared_mfaoptiontype.MfaOptionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MFAOptions') }})
    user_create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserLastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_status: Optional[shared_userstatustype_enum.UserStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStatus') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
