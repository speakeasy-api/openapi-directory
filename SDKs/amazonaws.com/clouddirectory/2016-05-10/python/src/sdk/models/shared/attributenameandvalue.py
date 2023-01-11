import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedattributevalue as shared_typedattributevalue


@dataclass_json
@dataclasses.dataclass
class AttributeNameAndValue:
    r"""AttributeNameAndValue
    Identifies the attribute name and value for a typed link.
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    value: shared_typedattributevalue.TypedAttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
