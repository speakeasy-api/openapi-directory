import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributegroup as shared_attributegroup


@dataclass_json
@dataclasses.dataclass
class CreateAttributeGroupResponse:
    attribute_group: Optional[shared_attributegroup.AttributeGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeGroup') }})
    
