import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createfirewallpolicyrequest as shared_createfirewallpolicyrequest
from ..shared import createfirewallpolicyresponse as shared_createfirewallpolicyresponse

class CreateFirewallPolicyXAmzTargetEnum(str, Enum):
    NETWORK_FIREWALL_20201112_CREATE_FIREWALL_POLICY = "NetworkFirewall_20201112.CreateFirewallPolicy"


@dataclasses.dataclass
class CreateFirewallPolicyHeaders:
    x_amz_target: CreateFirewallPolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFirewallPolicyRequest:
    headers: CreateFirewallPolicyHeaders = dataclasses.field()
    request: shared_createfirewallpolicyrequest.CreateFirewallPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFirewallPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_firewall_policy_response: Optional[shared_createfirewallpolicyresponse.CreateFirewallPolicyResponse] = dataclasses.field(default=None)
    insufficient_capacity_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
