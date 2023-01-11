import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecollectionfilter as shared_resourcecollectionfilter


@dataclass_json
@dataclasses.dataclass
class GetResourceCollectionResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_collection: Optional[shared_resourcecollectionfilter.ResourceCollectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    
