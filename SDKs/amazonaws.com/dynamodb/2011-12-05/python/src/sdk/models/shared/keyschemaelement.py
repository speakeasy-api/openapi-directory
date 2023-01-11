import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalarattributetype_enum as shared_scalarattributetype_enum


@dataclass_json
@dataclasses.dataclass
class KeySchemaElement:
    r"""KeySchemaElement
    <code>KeySchemaElement</code> is the primary key (hash or hash-and-range) structure for the table.
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_type: shared_scalarattributetype_enum.ScalarAttributeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
