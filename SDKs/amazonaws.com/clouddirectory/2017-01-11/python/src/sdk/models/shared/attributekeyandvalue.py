import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekey as shared_attributekey
from ..shared import typedattributevalue as shared_typedattributevalue


@dataclass_json
@dataclasses.dataclass
class AttributeKeyAndValue:
    r"""AttributeKeyAndValue
    The combination of an attribute key and an attribute value.
    """
    
    key: shared_attributekey.AttributeKey = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: shared_typedattributevalue.TypedAttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
