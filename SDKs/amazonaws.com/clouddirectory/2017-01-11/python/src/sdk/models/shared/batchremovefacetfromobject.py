import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference
from ..shared import schemafacet as shared_schemafacet


@dataclass_json
@dataclasses.dataclass
class BatchRemoveFacetFromObject:
    r"""BatchRemoveFacetFromObject
    A batch operation to remove a facet from an object.
    """
    
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: shared_schemafacet.SchemaFacet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
