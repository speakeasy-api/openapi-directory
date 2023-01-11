import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import associateresolverendpointipaddressrequest as shared_associateresolverendpointipaddressrequest
from ..shared import associateresolverendpointipaddressresponse as shared_associateresolverendpointipaddressresponse

class AssociateResolverEndpointIPAddressXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS = "Route53Resolver.AssociateResolverEndpointIpAddress"


@dataclasses.dataclass
class AssociateResolverEndpointIPAddressHeaders:
    x_amz_target: AssociateResolverEndpointIPAddressXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateResolverEndpointIPAddressRequest:
    headers: AssociateResolverEndpointIPAddressHeaders = dataclasses.field()
    request: shared_associateresolverendpointipaddressrequest.AssociateResolverEndpointIPAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateResolverEndpointIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_resolver_endpoint_ip_address_response: Optional[shared_associateresolverendpointipaddressresponse.AssociateResolverEndpointIPAddressResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
