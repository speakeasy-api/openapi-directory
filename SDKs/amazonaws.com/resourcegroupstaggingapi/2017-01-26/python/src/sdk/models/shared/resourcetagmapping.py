import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancedetails as shared_compliancedetails
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ResourceTagMapping:
    r"""ResourceTagMapping
    A list of resource ARNs and the tags (keys and values) that are associated with each.
    """
    
    compliance_details: Optional[shared_compliancedetails.ComplianceDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceDetails') }})
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
