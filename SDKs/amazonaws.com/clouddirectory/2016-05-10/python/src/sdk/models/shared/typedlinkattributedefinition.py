import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedattributevalue as shared_typedattributevalue
from ..shared import requiredattributebehavior_enum as shared_requiredattributebehavior_enum
from ..shared import rule as shared_rule
from ..shared import facetattributetype_enum as shared_facetattributetype_enum


@dataclass_json
@dataclasses.dataclass
class TypedLinkAttributeDefinition:
    r"""TypedLinkAttributeDefinition
    A typed link attribute definition.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    required_behavior: shared_requiredattributebehavior_enum.RequiredAttributeBehaviorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredBehavior') }})
    type: shared_facetattributetype_enum.FacetAttributeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    default_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    is_immutable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsImmutable') }})
    rules: Optional[dict[str, shared_rule.Rule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
