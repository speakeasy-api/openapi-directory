import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceattributes as shared_resourceattributes


@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsDirectFileData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsDirectFile:
    data: Optional[ResourceRelationshipsDirectFileData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsNotificationsData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsNotifications:
    data: Optional[ResourceRelationshipsNotificationsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsParentResourceData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsParentResource:
    data: Optional[ResourceRelationshipsParentResourceData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsShareData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationshipsShare:
    data: Optional[ResourceRelationshipsShareData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ResourceRelationships:
    direct_file: Optional[ResourceRelationshipsDirectFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directFile') }})
    notifications: Optional[list[ResourceRelationshipsNotifications]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    parent_resource: Optional[ResourceRelationshipsParentResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentResource') }})
    share: Optional[ResourceRelationshipsShare] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    
class ResourceTypeEnum(str, Enum):
    RESOURCE = "resource"


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    All properties of the resource.
    """
    
    attributes: Optional[shared_resourceattributes.ResourceAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[ResourceRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[ResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
