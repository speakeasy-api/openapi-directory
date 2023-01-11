import dataclasses



@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
