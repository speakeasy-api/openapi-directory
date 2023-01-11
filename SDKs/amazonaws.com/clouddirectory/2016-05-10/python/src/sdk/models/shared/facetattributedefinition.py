import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedattributevalue as shared_typedattributevalue
from ..shared import rule as shared_rule
from ..shared import facetattributetype_enum as shared_facetattributetype_enum


@dataclass_json
@dataclasses.dataclass
class FacetAttributeDefinition:
    r"""FacetAttributeDefinition
    A facet attribute definition. See <a href=\"http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_advanced.html#attributereferences\">Attribute References</a> for more information.
    """
    
    type: shared_facetattributetype_enum.FacetAttributeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    default_value: Optional[shared_typedattributevalue.TypedAttributeValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultValue') }})
    is_immutable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsImmutable') }})
    rules: Optional[dict[str, shared_rule.Rule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
