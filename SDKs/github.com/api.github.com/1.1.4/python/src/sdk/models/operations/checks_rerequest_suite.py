import dataclasses



@dataclasses.dataclass
class ChecksRerequestSuitePathParams:
    check_suite_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'check_suite_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksRerequestSuiteRequest:
    path_params: ChecksRerequestSuitePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksRerequestSuiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
