import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putresolverquerylogconfigpolicyrequest as shared_putresolverquerylogconfigpolicyrequest
from ..shared import putresolverquerylogconfigpolicyresponse as shared_putresolverquerylogconfigpolicyresponse

class PutResolverQueryLogConfigPolicyXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY = "Route53Resolver.PutResolverQueryLogConfigPolicy"


@dataclasses.dataclass
class PutResolverQueryLogConfigPolicyHeaders:
    x_amz_target: PutResolverQueryLogConfigPolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutResolverQueryLogConfigPolicyRequest:
    headers: PutResolverQueryLogConfigPolicyHeaders = dataclasses.field()
    request: shared_putresolverquerylogconfigpolicyrequest.PutResolverQueryLogConfigPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutResolverQueryLogConfigPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_policy_document: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    put_resolver_query_log_config_policy_response: Optional[shared_putresolverquerylogconfigpolicyresponse.PutResolverQueryLogConfigPolicyResponse] = dataclasses.field(default=None)
    unknown_resource_exception: Optional[Any] = dataclasses.field(default=None)
    
