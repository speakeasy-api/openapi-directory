import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userattributes as shared_userattributes

class UserRelationshipsHomeResourceDataTypeEnum(str, Enum):
    RESOURCE = "resource"


@dataclass_json
@dataclasses.dataclass
class UserRelationshipsHomeResourceData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UserRelationshipsHomeResourceDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UserRelationshipsHomeResource:
    data: Optional[UserRelationshipsHomeResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
class UserRelationshipsOwnerAccountDataTypeEnum(str, Enum):
    ACCOUNT = "account"


@dataclass_json
@dataclasses.dataclass
class UserRelationshipsOwnerAccountData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[UserRelationshipsOwnerAccountDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UserRelationshipsOwnerAccount:
    data: Optional[UserRelationshipsOwnerAccountData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UserRelationships:
    r"""UserRelationships
    Home resource and owner account relationship data for the user. 
    """
    
    owner_account: UserRelationshipsOwnerAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    home_resource: Optional[UserRelationshipsHomeResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeResource') }})
    

@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    Object contains user properties.
    """
    
    attributes: Optional[shared_userattributes.UserAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[UserRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
