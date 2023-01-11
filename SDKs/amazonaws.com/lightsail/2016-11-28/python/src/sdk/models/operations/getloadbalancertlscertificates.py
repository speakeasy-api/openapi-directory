import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getloadbalancertlscertificatesrequest as shared_getloadbalancertlscertificatesrequest
from ..shared import getloadbalancertlscertificatesresult as shared_getloadbalancertlscertificatesresult

class GetLoadBalancerTLSCertificatesXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_GET_LOAD_BALANCER_TLS_CERTIFICATES = "Lightsail_20161128.GetLoadBalancerTlsCertificates"


@dataclasses.dataclass
class GetLoadBalancerTLSCertificatesHeaders:
    x_amz_target: GetLoadBalancerTLSCertificatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLoadBalancerTLSCertificatesRequest:
    headers: GetLoadBalancerTLSCertificatesHeaders = dataclasses.field()
    request: shared_getloadbalancertlscertificatesrequest.GetLoadBalancerTLSCertificatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetLoadBalancerTLSCertificatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    account_setup_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    get_load_balancer_tls_certificates_result: Optional[shared_getloadbalancertlscertificatesresult.GetLoadBalancerTLSCertificatesResult] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    operation_failure_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    unauthenticated_exception: Optional[Any] = dataclasses.field(default=None)
    
