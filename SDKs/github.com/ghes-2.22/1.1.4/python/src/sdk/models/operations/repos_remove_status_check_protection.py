import dataclasses



@dataclasses.dataclass
class ReposRemoveStatusCheckProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposRemoveStatusCheckProtectionRequest:
    path_params: ReposRemoveStatusCheckProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposRemoveStatusCheckProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
