import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemafacet as shared_schemafacet
from ..shared import objectreference as shared_objectreference


@dataclass_json
@dataclasses.dataclass
class BatchListObjectAttributes:
    r"""BatchListObjectAttributes
    Represents the output of a <a>ListObjectAttributes</a> operation.
    """
    
    object_reference: shared_objectreference.ObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    facet_filter: Optional[shared_schemafacet.SchemaFacet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FacetFilter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
