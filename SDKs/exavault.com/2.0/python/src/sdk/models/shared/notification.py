import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationattributes as shared_notificationattributes

class NotificationRelationshipsOwnerUserDataTypeEnum(str, Enum):
    USER = "user"


@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsOwnerUserData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[NotificationRelationshipsOwnerUserDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsOwnerUser:
    data: Optional[NotificationRelationshipsOwnerUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsResourceData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsResource:
    data: Optional[NotificationRelationshipsResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsShareData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationshipsShare:
    data: Optional[NotificationRelationshipsShareData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class NotificationRelationships:
    owner_user: Optional[NotificationRelationshipsOwnerUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerUser') }})
    resource: Optional[NotificationRelationshipsResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    share: Optional[NotificationRelationshipsShare] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    

@dataclass_json
@dataclasses.dataclass
class Notification:
    r"""Notification
    Object containing notification properties.
    """
    
    attributes: Optional[shared_notificationattributes.NotificationAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[NotificationRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
