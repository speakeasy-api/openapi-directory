import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributegroupsummary as shared_attributegroupsummary


@dataclass_json
@dataclasses.dataclass
class DeleteAttributeGroupResponse:
    attribute_group: Optional[shared_attributegroupsummary.AttributeGroupSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeGroup') }})
    
