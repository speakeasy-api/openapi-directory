import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facetattributedefinition as shared_facetattributedefinition
from ..shared import facetattributereference as shared_facetattributereference
from ..shared import requiredattributebehavior_enum as shared_requiredattributebehavior_enum


@dataclass_json
@dataclasses.dataclass
class FacetAttribute:
    r"""FacetAttribute
    An attribute that is associated with the <a>Facet</a>.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    attribute_definition: Optional[shared_facetattributedefinition.FacetAttributeDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinition') }})
    attribute_reference: Optional[shared_facetattributereference.FacetAttributeReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeReference') }})
    required_behavior: Optional[shared_requiredattributebehavior_enum.RequiredAttributeBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredBehavior') }})
    
