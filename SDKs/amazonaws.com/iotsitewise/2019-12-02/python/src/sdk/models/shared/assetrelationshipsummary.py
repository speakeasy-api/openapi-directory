import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assethierarchyinfo as shared_assethierarchyinfo
from ..shared import assetrelationshiptype_enum as shared_assetrelationshiptype_enum


@dataclass_json
@dataclasses.dataclass
class AssetRelationshipSummary:
    r"""AssetRelationshipSummary
    Contains information about assets that are related to one another.
    """
    
    relationship_type: shared_assetrelationshiptype_enum.AssetRelationshipTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipType') }})
    hierarchy_info: Optional[shared_assethierarchyinfo.AssetHierarchyInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hierarchyInfo') }})
    
