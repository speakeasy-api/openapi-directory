import dataclasses
from typing import Optional
from ..shared import route as shared_route
from ..shared import containersgroupsnameoridmaproutepostinfo as shared_containersgroupsnameoridmaproutepostinfo


@dataclasses.dataclass
class PostContainersGroupsNameOrIDMaproutePathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersGroupsNameOrIDMaprouteHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersGroupsNameOrIDMaprouteRequest:
    headers: PostContainersGroupsNameOrIDMaprouteHeaders = dataclasses.field()
    path_params: PostContainersGroupsNameOrIDMaproutePathParams = dataclasses.field()
    request: shared_route.Route = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContainersGroupsNameOrIDMaprouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_groups_name_or_id_maproute_post_info: Optional[shared_containersgroupsnameoridmaproutepostinfo.ContainersGroupsNameOrIDMaproutePostInfo] = dataclasses.field(default=None)
    
