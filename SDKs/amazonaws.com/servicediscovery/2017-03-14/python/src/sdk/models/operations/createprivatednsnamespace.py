import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createprivatednsnamespacerequest as shared_createprivatednsnamespacerequest
from ..shared import createprivatednsnamespaceresponse as shared_createprivatednsnamespaceresponse

class CreatePrivateDNSNamespaceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_CREATE_PRIVATE_DNS_NAMESPACE = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"


@dataclasses.dataclass
class CreatePrivateDNSNamespaceHeaders:
    x_amz_target: CreatePrivateDNSNamespaceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePrivateDNSNamespaceRequest:
    headers: CreatePrivateDNSNamespaceHeaders = dataclasses.field()
    request: shared_createprivatednsnamespacerequest.CreatePrivateDNSNamespaceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePrivateDNSNamespaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_private_dns_namespace_response: Optional[shared_createprivatednsnamespaceresponse.CreatePrivateDNSNamespaceResponse] = dataclasses.field(default=None)
    duplicate_request: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    namespace_already_exists: Optional[Any] = dataclasses.field(default=None)
    resource_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    too_many_tags_exception: Optional[Any] = dataclasses.field(default=None)
    
