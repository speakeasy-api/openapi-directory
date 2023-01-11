import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import disassociatewebaclrequest as shared_disassociatewebaclrequest

class DisassociateWebAclxAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_DISASSOCIATE_WEB_ACL = "AWSWAF_Regional_20161128.DisassociateWebACL"


@dataclasses.dataclass
class DisassociateWebACLHeaders:
    x_amz_target: DisassociateWebAclxAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisassociateWebACLRequest:
    headers: DisassociateWebACLHeaders = dataclasses.field()
    request: shared_disassociatewebaclrequest.DisassociateWebACLRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisassociateWebACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disassociate_web_acl_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_account_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    
