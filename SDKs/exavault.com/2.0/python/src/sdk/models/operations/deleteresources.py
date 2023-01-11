import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emptyresponse as shared_emptyresponse
from ..shared import resourcemultiresponse as shared_resourcemultiresponse


@dataclasses.dataclass
class DeleteResourcesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteResourcesDeleteResourcesRequestBody:
    resources: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclasses.dataclass
class DeleteResourcesRequest:
    headers: DeleteResourcesHeaders = dataclasses.field()
    request: Optional[DeleteResourcesDeleteResourcesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response: Optional[shared_emptyresponse.EmptyResponse] = dataclasses.field(default=None)
    resource_multi_response: Optional[shared_resourcemultiresponse.ResourceMultiResponse] = dataclasses.field(default=None)
    
