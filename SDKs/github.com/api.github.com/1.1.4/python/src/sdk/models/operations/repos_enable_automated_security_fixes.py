import dataclasses



@dataclasses.dataclass
class ReposEnableAutomatedSecurityFixesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposEnableAutomatedSecurityFixesRequest:
    path_params: ReposEnableAutomatedSecurityFixesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposEnableAutomatedSecurityFixesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
