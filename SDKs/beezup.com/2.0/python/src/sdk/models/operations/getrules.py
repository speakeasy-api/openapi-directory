import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import rulelist as shared_rulelist


@dataclasses.dataclass
class GetRulesPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesRequest:
    path_params: GetRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    rule_list: Optional[shared_rulelist.RuleList] = dataclasses.field(default=None)
    
