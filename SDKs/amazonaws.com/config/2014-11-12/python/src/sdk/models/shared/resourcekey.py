import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class ResourceKey:
    r"""ResourceKey
    The details that identify a resource within Config, including the resource type and resource ID.
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
