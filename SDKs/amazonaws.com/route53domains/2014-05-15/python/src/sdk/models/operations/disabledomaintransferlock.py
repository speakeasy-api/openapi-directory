import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import disabledomaintransferlockrequest as shared_disabledomaintransferlockrequest
from ..shared import disabledomaintransferlockresponse as shared_disabledomaintransferlockresponse

class DisableDomainTransferLockXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_DISABLE_DOMAIN_TRANSFER_LOCK = "Route53Domains_v20140515.DisableDomainTransferLock"


@dataclasses.dataclass
class DisableDomainTransferLockHeaders:
    x_amz_target: DisableDomainTransferLockXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisableDomainTransferLockRequest:
    headers: DisableDomainTransferLockHeaders = dataclasses.field()
    request: shared_disabledomaintransferlockrequest.DisableDomainTransferLockRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisableDomainTransferLockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    disable_domain_transfer_lock_response: Optional[shared_disabledomaintransferlockresponse.DisableDomainTransferLockResponse] = dataclasses.field(default=None)
    duplicate_request: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    operation_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    tld_rules_violation: Optional[Any] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
