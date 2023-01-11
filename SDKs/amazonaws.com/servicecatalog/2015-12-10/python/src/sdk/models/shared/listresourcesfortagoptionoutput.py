import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcedetail as shared_resourcedetail


@dataclass_json
@dataclasses.dataclass
class ListResourcesForTagOptionOutput:
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    resource_details: Optional[list[shared_resourcedetail.ResourceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDetails') }})
    
