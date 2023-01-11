import dataclasses



@dataclasses.dataclass
class InteractionsRemoveRestrictionsForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InteractionsRemoveRestrictionsForOrgRequest:
    path_params: InteractionsRemoveRestrictionsForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InteractionsRemoveRestrictionsForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
