import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updaterulerequest as shared_updaterulerequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class UpdateRulePathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRuleRequest:
    path_params: UpdateRulePathParams = dataclasses.field()
    request: shared_updaterulerequest.UpdateRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
