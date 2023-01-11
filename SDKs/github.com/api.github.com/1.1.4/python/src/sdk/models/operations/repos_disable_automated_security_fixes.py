import dataclasses



@dataclasses.dataclass
class ReposDisableAutomatedSecurityFixesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDisableAutomatedSecurityFixesRequest:
    path_params: ReposDisableAutomatedSecurityFixesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDisableAutomatedSecurityFixesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
