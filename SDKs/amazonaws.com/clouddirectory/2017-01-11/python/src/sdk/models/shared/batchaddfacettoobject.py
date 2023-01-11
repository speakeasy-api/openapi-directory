import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributekeyandvalue as shared_attributekeyandvalue
from ..shared import objectreference as shared_objectreference
from ..shared import schemafacet as shared_schemafacet


@dataclass_json
@dataclasses.dataclass
class BatchAddFacetToObject:
    r"""BatchAddFacetToObject
    Represents the output of a batch add facet to object operation.
    """
    
    object_attribute_list: list[shared_attributekeyandvalue.AttributeKeyAndValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectAttributeList') }})
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: shared_schemafacet.SchemaFacet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
