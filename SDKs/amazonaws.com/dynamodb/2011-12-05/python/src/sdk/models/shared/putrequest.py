import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalue as shared_attributevalue


@dataclass_json
@dataclasses.dataclass
class PutRequest:
    r"""PutRequest
    A container for a Put BatchWrite request
    """
    
    item: dict[str, shared_attributevalue.AttributeValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    
