import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteAppsAppIDRulesRuleIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rule_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsAppIDRulesRuleIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteAppsAppIDRulesRuleIDRequest:
    path_params: DeleteAppsAppIDRulesRuleIDPathParams = dataclasses.field()
    security: DeleteAppsAppIDRulesRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsAppIDRulesRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
