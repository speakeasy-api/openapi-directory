import dataclasses
from typing import Any,Optional
from ..shared import containersgroupspostcreatedinfo as shared_containersgroupspostcreatedinfo


@dataclasses.dataclass
class PostContainersGroupsHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersGroupsRequest:
    headers: PostContainersGroupsHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContainersGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_groups_post_created_info: Optional[shared_containersgroupspostcreatedinfo.ContainersGroupsPostCreatedInfo] = dataclasses.field(default=None)
    
