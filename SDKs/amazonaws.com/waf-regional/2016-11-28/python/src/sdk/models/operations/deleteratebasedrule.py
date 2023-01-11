import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteratebasedrulerequest as shared_deleteratebasedrulerequest
from ..shared import deleteratebasedruleresponse as shared_deleteratebasedruleresponse

class DeleteRateBasedRuleXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_DELETE_RATE_BASED_RULE = "AWSWAF_Regional_20161128.DeleteRateBasedRule"


@dataclasses.dataclass
class DeleteRateBasedRuleHeaders:
    x_amz_target: DeleteRateBasedRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRateBasedRuleRequest:
    headers: DeleteRateBasedRuleHeaders = dataclasses.field()
    request: shared_deleteratebasedrulerequest.DeleteRateBasedRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRateBasedRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_rate_based_rule_response: Optional[shared_deleteratebasedruleresponse.DeleteRateBasedRuleResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_non_empty_entity_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_referenced_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
