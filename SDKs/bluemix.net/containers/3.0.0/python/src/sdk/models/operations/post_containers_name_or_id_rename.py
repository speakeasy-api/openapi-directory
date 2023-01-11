import dataclasses



@dataclasses.dataclass
class PostContainersNameOrIDRenamePathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRenameQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRenameHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRenameRequest:
    headers: PostContainersNameOrIDRenameHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDRenamePathParams = dataclasses.field()
    query_params: PostContainersNameOrIDRenameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDRenameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
