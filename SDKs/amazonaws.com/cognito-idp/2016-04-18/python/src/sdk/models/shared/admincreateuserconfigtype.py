import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagetemplatetype as shared_messagetemplatetype


@dataclass_json
@dataclasses.dataclass
class AdminCreateUserConfigType:
    r"""AdminCreateUserConfigType
    The configuration for creating a new user profile.
    """
    
    allow_admin_create_user_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowAdminCreateUserOnly') }})
    invite_message_template: Optional[shared_messagetemplatetype.MessageTemplateType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InviteMessageTemplate') }})
    unused_account_validity_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnusedAccountValidityDays') }})
    
