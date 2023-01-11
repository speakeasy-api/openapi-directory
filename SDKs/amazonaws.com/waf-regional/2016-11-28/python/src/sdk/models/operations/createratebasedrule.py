import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createratebasedrulerequest as shared_createratebasedrulerequest
from ..shared import createratebasedruleresponse as shared_createratebasedruleresponse

class CreateRateBasedRuleXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_CREATE_RATE_BASED_RULE = "AWSWAF_Regional_20161128.CreateRateBasedRule"


@dataclasses.dataclass
class CreateRateBasedRuleHeaders:
    x_amz_target: CreateRateBasedRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRateBasedRuleRequest:
    headers: CreateRateBasedRuleHeaders = dataclasses.field()
    request: shared_createratebasedrulerequest.CreateRateBasedRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRateBasedRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_rate_based_rule_response: Optional[shared_createratebasedruleresponse.CreateRateBasedRuleResponse] = dataclasses.field(default=None)
    waf_bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    waf_disallowed_name_exception: Optional[Any] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
