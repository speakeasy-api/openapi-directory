import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class GetResourceLfTagsRequest:
    resource: shared_resource.Resource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    show_assigned_lf_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShowAssignedLFTags') }})
    
