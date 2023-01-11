import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facet as shared_facet


@dataclass_json
@dataclasses.dataclass
class GetFacetResponse:
    facet: Optional[shared_facet.Facet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Facet') }})
    
