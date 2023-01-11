import dataclasses



@dataclasses.dataclass
class ReposRemoveCollaboratorPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposRemoveCollaboratorRequest:
    path_params: ReposRemoveCollaboratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposRemoveCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
