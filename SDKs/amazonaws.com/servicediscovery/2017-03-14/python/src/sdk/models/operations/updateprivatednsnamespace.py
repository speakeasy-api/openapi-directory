import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateprivatednsnamespacerequest as shared_updateprivatednsnamespacerequest
from ..shared import updateprivatednsnamespaceresponse as shared_updateprivatednsnamespaceresponse

class UpdatePrivateDNSNamespaceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_UPDATE_PRIVATE_DNS_NAMESPACE = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"


@dataclasses.dataclass
class UpdatePrivateDNSNamespaceHeaders:
    x_amz_target: UpdatePrivateDNSNamespaceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePrivateDNSNamespaceRequest:
    headers: UpdatePrivateDNSNamespaceHeaders = dataclasses.field()
    request: shared_updateprivatednsnamespacerequest.UpdatePrivateDNSNamespaceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePrivateDNSNamespaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    duplicate_request: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    namespace_not_found: Optional[Any] = dataclasses.field(default=None)
    resource_in_use: Optional[Any] = dataclasses.field(default=None)
    update_private_dns_namespace_response: Optional[shared_updateprivatednsnamespaceresponse.UpdatePrivateDNSNamespaceResponse] = dataclasses.field(default=None)
    
