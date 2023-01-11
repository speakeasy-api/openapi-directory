import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createrulegrouprequest as shared_createrulegrouprequest
from ..shared import createrulegroupresponse as shared_createrulegroupresponse

class CreateRuleGroupXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_CREATE_RULE_GROUP = "AWSWAF_20150824.CreateRuleGroup"


@dataclasses.dataclass
class CreateRuleGroupHeaders:
    x_amz_target: CreateRuleGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRuleGroupRequest:
    headers: CreateRuleGroupHeaders = dataclasses.field()
    request: shared_createrulegrouprequest.CreateRuleGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRuleGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_rule_group_response: Optional[shared_createrulegroupresponse.CreateRuleGroupResponse] = dataclasses.field(default=None)
    waf_bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    waf_disallowed_name_exception: Optional[Any] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
