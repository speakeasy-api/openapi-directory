import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributedatatype_enum as shared_attributedatatype_enum
from ..shared import numberattributeconstraintstype as shared_numberattributeconstraintstype
from ..shared import stringattributeconstraintstype as shared_stringattributeconstraintstype


@dataclass_json
@dataclasses.dataclass
class SchemaAttributeType:
    r"""SchemaAttributeType
    Contains information about the schema attribute.
    """
    
    attribute_data_type: Optional[shared_attributedatatype_enum.AttributeDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDataType') }})
    developer_only_attribute: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperOnlyAttribute') }})
    mutable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mutable') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    number_attribute_constraints: Optional[shared_numberattributeconstraintstype.NumberAttributeConstraintsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberAttributeConstraints') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Required') }})
    string_attribute_constraints: Optional[shared_stringattributeconstraintstype.StringAttributeConstraintsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringAttributeConstraints') }})
    
