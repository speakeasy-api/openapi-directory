import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectreference as shared_objectreference
from ..shared import schemafacet as shared_schemafacet


@dataclass_json
@dataclasses.dataclass
class BatchGetObjectAttributes:
    r"""BatchGetObjectAttributes
    Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    attribute_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    schema_facet: shared_schemafacet.SchemaFacet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacet') }})
    
