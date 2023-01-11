import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import enabledomainautorenewrequest as shared_enabledomainautorenewrequest

class EnableDomainAutoRenewXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_AUTO_RENEW = "Route53Domains_v20140515.EnableDomainAutoRenew"


@dataclasses.dataclass
class EnableDomainAutoRenewHeaders:
    x_amz_target: EnableDomainAutoRenewXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableDomainAutoRenewRequest:
    headers: EnableDomainAutoRenewHeaders = dataclasses.field()
    request: shared_enabledomainautorenewrequest.EnableDomainAutoRenewRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnableDomainAutoRenewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enable_domain_auto_renew_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    tld_rules_violation: Optional[Any] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
