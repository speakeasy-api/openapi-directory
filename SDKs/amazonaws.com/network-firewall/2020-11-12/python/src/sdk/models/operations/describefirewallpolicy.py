import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describefirewallpolicyrequest as shared_describefirewallpolicyrequest
from ..shared import describefirewallpolicyresponse as shared_describefirewallpolicyresponse

class DescribeFirewallPolicyXAmzTargetEnum(str, Enum):
    NETWORK_FIREWALL_20201112_DESCRIBE_FIREWALL_POLICY = "NetworkFirewall_20201112.DescribeFirewallPolicy"


@dataclasses.dataclass
class DescribeFirewallPolicyHeaders:
    x_amz_target: DescribeFirewallPolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeFirewallPolicyRequest:
    headers: DescribeFirewallPolicyHeaders = dataclasses.field()
    request: shared_describefirewallpolicyrequest.DescribeFirewallPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeFirewallPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_firewall_policy_response: Optional[shared_describefirewallpolicyresponse.DescribeFirewallPolicyResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
