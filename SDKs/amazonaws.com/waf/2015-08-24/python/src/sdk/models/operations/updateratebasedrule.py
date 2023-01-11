import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateratebasedrulerequest as shared_updateratebasedrulerequest
from ..shared import updateratebasedruleresponse as shared_updateratebasedruleresponse

class UpdateRateBasedRuleXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_UPDATE_RATE_BASED_RULE = "AWSWAF_20150824.UpdateRateBasedRule"


@dataclasses.dataclass
class UpdateRateBasedRuleHeaders:
    x_amz_target: UpdateRateBasedRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRateBasedRuleRequest:
    headers: UpdateRateBasedRuleHeaders = dataclasses.field()
    request: shared_updateratebasedrulerequest.UpdateRateBasedRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRateBasedRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_rate_based_rule_response: Optional[shared_updateratebasedruleresponse.UpdateRateBasedRuleResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_container_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_referenced_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    
