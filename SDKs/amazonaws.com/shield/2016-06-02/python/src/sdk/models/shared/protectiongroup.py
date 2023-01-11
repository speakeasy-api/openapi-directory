import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongroupaggregation_enum as shared_protectiongroupaggregation_enum
from ..shared import protectiongrouppattern_enum as shared_protectiongrouppattern_enum
from ..shared import protectedresourcetype_enum as shared_protectedresourcetype_enum


@dataclass_json
@dataclasses.dataclass
class ProtectionGroup:
    r"""ProtectionGroup
    A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
    """
    
    aggregation: shared_protectiongroupaggregation_enum.ProtectionGroupAggregationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aggregation') }})
    members: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Members') }})
    pattern: shared_protectiongrouppattern_enum.ProtectionGroupPatternEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    protection_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupId') }})
    protection_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupArn') }})
    resource_type: Optional[shared_protectedresourcetype_enum.ProtectedResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
