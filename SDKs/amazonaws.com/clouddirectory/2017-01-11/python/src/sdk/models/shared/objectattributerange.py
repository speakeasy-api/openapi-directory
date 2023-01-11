import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekey as shared_attributekey
from ..shared import typedattributevaluerange as shared_typedattributevaluerange


@dataclass_json
@dataclasses.dataclass
class ObjectAttributeRange:
    r"""ObjectAttributeRange
    A range of attributes.
    """
    
    attribute_key: Optional[shared_attributekey.AttributeKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeKey') }})
    range: Optional[shared_typedattributevaluerange.TypedAttributeValueRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Range') }})
    
