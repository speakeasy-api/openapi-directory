import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registerdomainrequest as shared_registerdomainrequest
from ..shared import registerdomainresponse as shared_registerdomainresponse

class RegisterDomainXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_REGISTER_DOMAIN = "Route53Domains_v20140515.RegisterDomain"


@dataclasses.dataclass
class RegisterDomainHeaders:
    x_amz_target: RegisterDomainXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterDomainRequest:
    headers: RegisterDomainHeaders = dataclasses.field()
    request: shared_registerdomainrequest.RegisterDomainRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domain_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    duplicate_request: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    operation_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    register_domain_response: Optional[shared_registerdomainresponse.RegisterDomainResponse] = dataclasses.field(default=None)
    tld_rules_violation: Optional[Any] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
