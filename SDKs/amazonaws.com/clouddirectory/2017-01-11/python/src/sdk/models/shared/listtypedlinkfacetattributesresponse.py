import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkattributedefinition as shared_typedlinkattributedefinition


@dataclass_json
@dataclasses.dataclass
class ListTypedLinkFacetAttributesResponse:
    attributes: Optional[list[shared_typedlinkattributedefinition.TypedLinkAttributeDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
