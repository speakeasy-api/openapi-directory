import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleterulegrouprequest as shared_deleterulegrouprequest
from ..shared import deleterulegroupresponse as shared_deleterulegroupresponse

class DeleteRuleGroupXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_DELETE_RULE_GROUP = "AWSWAF_Regional_20161128.DeleteRuleGroup"


@dataclasses.dataclass
class DeleteRuleGroupHeaders:
    x_amz_target: DeleteRuleGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRuleGroupRequest:
    headers: DeleteRuleGroupHeaders = dataclasses.field()
    request: shared_deleterulegrouprequest.DeleteRuleGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRuleGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_rule_group_response: Optional[shared_deleterulegroupresponse.DeleteRuleGroupResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_non_empty_entity_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_referenced_item_exception: Optional[Any] = dataclasses.field(default=None)
    waf_stale_data_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_tag_operation_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
