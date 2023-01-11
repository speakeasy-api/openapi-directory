import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemafacet as shared_schemafacet


@dataclass_json
@dataclasses.dataclass
class BatchGetObjectInformationResponse:
    r"""BatchGetObjectInformationResponse
    Represents the output of a <a>GetObjectInformation</a> response operation.
    """
    
    object_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    schema_facets: Optional[list[shared_schemafacet.SchemaFacet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaFacets') }})
    
