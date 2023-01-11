import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedattributevaluerange as shared_typedattributevaluerange


@dataclass_json
@dataclasses.dataclass
class TypedLinkAttributeRange:
    r"""TypedLinkAttributeRange
    Identifies the range of attributes that are used by a specified filter.
    """
    
    range: shared_typedattributevaluerange.TypedAttributeValueRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Range') }})
    attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    
