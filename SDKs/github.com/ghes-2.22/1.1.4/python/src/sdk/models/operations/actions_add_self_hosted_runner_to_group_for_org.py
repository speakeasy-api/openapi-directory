import dataclasses



@dataclasses.dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgRequest:
    path_params: ActionsAddSelfHostedRunnerToGroupForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
