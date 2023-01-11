import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shareattributes as shared_shareattributes

class ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum(str, Enum):
    MESSAGE = "message"


@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsMessageShareMessageData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsMessage:
    data: Optional[ShareShareRelationshipsShareRelationshipsMessageShareMessageData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
class ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum(str, Enum):
    NOTIFICATION = "notification"


@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsNotificationData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsNotification:
    data: Optional[ShareShareRelationshipsShareRelationshipsNotificationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsOwnerData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsOwner:
    data: Optional[ShareShareRelationshipsShareRelationshipsOwnerData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
class ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum(str, Enum):
    RESOURCE = "resource"


@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsResourceShareResourceData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationshipsShareRelationshipsResource:
    data: Optional[ShareShareRelationshipsShareRelationshipsResourceShareResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareShareRelationships:
    r"""ShareShareRelationships
    Message, owner, resource, and notification relationships of the share. 
    """
    
    messages: Optional[list[ShareShareRelationshipsShareRelationshipsMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    notifications: Optional[list[ShareShareRelationshipsShareRelationshipsNotification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    owner: Optional[ShareShareRelationshipsShareRelationshipsOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    resources: Optional[list[ShareShareRelationshipsShareRelationshipsResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
class ShareTypeEnum(str, Enum):
    SHARE = "share"


@dataclass_json
@dataclasses.dataclass
class Share:
    r"""Share
    Object contains share properties.
    """
    
    attributes: Optional[shared_shareattributes.ShareAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[ShareShareRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[ShareTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
