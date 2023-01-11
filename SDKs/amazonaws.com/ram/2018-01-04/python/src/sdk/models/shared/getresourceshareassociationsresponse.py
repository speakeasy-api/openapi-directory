import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceshareassociation as shared_resourceshareassociation


@dataclass_json
@dataclasses.dataclass
class GetResourceShareAssociationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_share_associations: Optional[list[shared_resourceshareassociation.ResourceShareAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareAssociations') }})
    
