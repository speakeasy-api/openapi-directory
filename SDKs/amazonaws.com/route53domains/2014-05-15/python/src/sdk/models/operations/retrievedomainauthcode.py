import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import retrievedomainauthcoderequest as shared_retrievedomainauthcoderequest
from ..shared import retrievedomainauthcoderesponse as shared_retrievedomainauthcoderesponse

class RetrieveDomainAuthCodeXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_RETRIEVE_DOMAIN_AUTH_CODE = "Route53Domains_v20140515.RetrieveDomainAuthCode"


@dataclasses.dataclass
class RetrieveDomainAuthCodeHeaders:
    x_amz_target: RetrieveDomainAuthCodeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveDomainAuthCodeRequest:
    headers: RetrieveDomainAuthCodeHeaders = dataclasses.field()
    request: shared_retrievedomainauthcoderequest.RetrieveDomainAuthCodeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RetrieveDomainAuthCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    retrieve_domain_auth_code_response: Optional[shared_retrievedomainauthcoderesponse.RetrieveDomainAuthCodeResponse] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
