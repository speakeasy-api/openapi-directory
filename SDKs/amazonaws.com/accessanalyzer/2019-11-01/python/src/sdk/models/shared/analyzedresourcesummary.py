import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class AnalyzedResourceSummary:
    r"""AnalyzedResourceSummary
    Contains the ARN of the analyzed resource.
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    resource_owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwnerAccount') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
