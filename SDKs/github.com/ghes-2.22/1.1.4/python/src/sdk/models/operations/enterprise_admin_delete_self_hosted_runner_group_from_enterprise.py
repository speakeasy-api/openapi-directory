import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
