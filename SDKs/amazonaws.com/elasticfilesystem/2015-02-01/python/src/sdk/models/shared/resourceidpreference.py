import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidtype_enum as shared_resourceidtype_enum
from ..shared import resource_enum as shared_resource_enum


@dataclass_json
@dataclasses.dataclass
class ResourceIDPreference:
    r"""ResourceIDPreference
    Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
    """
    
    resource_id_type: Optional[shared_resourceidtype_enum.ResourceIDTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdType') }})
    resources: Optional[list[shared_resource_enum.ResourceEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    
