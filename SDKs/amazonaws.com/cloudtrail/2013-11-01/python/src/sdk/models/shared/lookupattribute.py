import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lookupattributekey_enum as shared_lookupattributekey_enum


@dataclass_json
@dataclasses.dataclass
class LookupAttribute:
    r"""LookupAttribute
    Specifies an attribute and value that filter the events returned.
    """
    
    attribute_key: shared_lookupattributekey_enum.LookupAttributeKeyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeKey') }})
    attribute_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValue') }})
    
