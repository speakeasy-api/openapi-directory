import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdomainsuggestionsrequest as shared_getdomainsuggestionsrequest
from ..shared import getdomainsuggestionsresponse as shared_getdomainsuggestionsresponse

class GetDomainSuggestionsXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_GET_DOMAIN_SUGGESTIONS = "Route53Domains_v20140515.GetDomainSuggestions"


@dataclasses.dataclass
class GetDomainSuggestionsHeaders:
    x_amz_target: GetDomainSuggestionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainSuggestionsRequest:
    headers: GetDomainSuggestionsHeaders = dataclasses.field()
    request: shared_getdomainsuggestionsrequest.GetDomainSuggestionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDomainSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_domain_suggestions_response: Optional[shared_getdomainsuggestionsresponse.GetDomainSuggestionsResponse] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
