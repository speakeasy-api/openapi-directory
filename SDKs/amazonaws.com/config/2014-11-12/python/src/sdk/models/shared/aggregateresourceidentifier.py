import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class AggregateResourceIdentifier:
    r"""AggregateResourceIdentifier
    The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
    """
    
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    source_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccountId') }})
    source_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegion') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceName') }})
    
