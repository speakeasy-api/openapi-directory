import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facetattribute as shared_facetattribute


@dataclass_json
@dataclasses.dataclass
class ListFacetAttributesResponse:
    attributes: Optional[list[shared_facetattribute.FacetAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
