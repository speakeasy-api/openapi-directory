import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getfirewallrulegroupassociationrequest as shared_getfirewallrulegroupassociationrequest
from ..shared import getfirewallrulegroupassociationresponse as shared_getfirewallrulegroupassociationresponse

class GetFirewallRuleGroupAssociationXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_ASSOCIATION = "Route53Resolver.GetFirewallRuleGroupAssociation"


@dataclasses.dataclass
class GetFirewallRuleGroupAssociationHeaders:
    x_amz_target: GetFirewallRuleGroupAssociationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFirewallRuleGroupAssociationRequest:
    headers: GetFirewallRuleGroupAssociationHeaders = dataclasses.field()
    request: shared_getfirewallrulegroupassociationrequest.GetFirewallRuleGroupAssociationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetFirewallRuleGroupAssociationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_firewall_rule_group_association_response: Optional[shared_getfirewallrulegroupassociationresponse.GetFirewallRuleGroupAssociationResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
