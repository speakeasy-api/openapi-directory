import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import checkdomaintransferabilityrequest as shared_checkdomaintransferabilityrequest
from ..shared import checkdomaintransferabilityresponse as shared_checkdomaintransferabilityresponse

class CheckDomainTransferabilityXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_TRANSFERABILITY = "Route53Domains_v20140515.CheckDomainTransferability"


@dataclasses.dataclass
class CheckDomainTransferabilityHeaders:
    x_amz_target: CheckDomainTransferabilityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CheckDomainTransferabilityRequest:
    headers: CheckDomainTransferabilityHeaders = dataclasses.field()
    request: shared_checkdomaintransferabilityrequest.CheckDomainTransferabilityRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckDomainTransferabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_domain_transferability_response: Optional[shared_checkdomaintransferabilityresponse.CheckDomainTransferabilityResponse] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
