import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecopymove as shared_resourcecopymove
from ..shared import resourcemultiresponse as shared_resourcemultiresponse


@dataclasses.dataclass
class MoveResourcesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MoveResourcesMoveResourcesRequestBody:
    parent_resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentResource') }})
    resources: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclasses.dataclass
class MoveResourcesRequest:
    headers: MoveResourcesHeaders = dataclasses.field()
    request: Optional[MoveResourcesMoveResourcesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MoveResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_copy_move: Optional[shared_resourcecopymove.ResourceCopyMove] = dataclasses.field(default=None)
    resource_multi_response: Optional[shared_resourcemultiresponse.ResourceMultiResponse] = dataclasses.field(default=None)
    
