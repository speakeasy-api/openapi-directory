import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class UserStackAssociation:
    r"""UserStackAssociation
    Describes a user in the user pool and the associated stack.
    """
    
    authentication_type: shared_authenticationtype_enum.AuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    stack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    send_email_notification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendEmailNotification') }})
    
