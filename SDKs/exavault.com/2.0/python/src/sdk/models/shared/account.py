import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountattributes as shared_accountattributes

class AccountMasterUserMasterUserDataTypeEnum(str, Enum):
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class AccountMasterUserMasterUserData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[AccountMasterUserMasterUserDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountMasterUserMasterUser:
    data: Optional[AccountMasterUserMasterUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountMasterUser:
    master_user: Optional[AccountMasterUserMasterUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterUser') }})
    
class AccountTypeEnum(str, Enum):
    ACCOUNT = "account"


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Object contains all account properties.
    """
    
    attributes: Optional[shared_accountattributes.AccountAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[AccountMasterUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[AccountTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
