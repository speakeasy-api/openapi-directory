import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatefirewallpolicychangeprotectionrequest as shared_updatefirewallpolicychangeprotectionrequest
from ..shared import updatefirewallpolicychangeprotectionresponse as shared_updatefirewallpolicychangeprotectionresponse

class UpdateFirewallPolicyChangeProtectionXAmzTargetEnum(str, Enum):
    NETWORK_FIREWALL_20201112_UPDATE_FIREWALL_POLICY_CHANGE_PROTECTION = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"


@dataclasses.dataclass
class UpdateFirewallPolicyChangeProtectionHeaders:
    x_amz_target: UpdateFirewallPolicyChangeProtectionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFirewallPolicyChangeProtectionRequest:
    headers: UpdateFirewallPolicyChangeProtectionHeaders = dataclasses.field()
    request: shared_updatefirewallpolicychangeprotectionrequest.UpdateFirewallPolicyChangeProtectionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateFirewallPolicyChangeProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_token_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    resource_owner_check_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_firewall_policy_change_protection_response: Optional[shared_updatefirewallpolicychangeprotectionresponse.UpdateFirewallPolicyChangeProtectionResponse] = dataclasses.field(default=None)
    
