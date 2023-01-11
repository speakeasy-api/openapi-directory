import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getorganizationconfigruledetailedstatusrequest as shared_getorganizationconfigruledetailedstatusrequest
from ..shared import getorganizationconfigruledetailedstatusresponse as shared_getorganizationconfigruledetailedstatusresponse


@dataclasses.dataclass
class GetOrganizationConfigRuleDetailedStatusQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_ORGANIZATION_CONFIG_RULE_DETAILED_STATUS = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"


@dataclasses.dataclass
class GetOrganizationConfigRuleDetailedStatusHeaders:
    x_amz_target: GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationConfigRuleDetailedStatusRequest:
    headers: GetOrganizationConfigRuleDetailedStatusHeaders = dataclasses.field()
    query_params: GetOrganizationConfigRuleDetailedStatusQueryParams = dataclasses.field()
    request: shared_getorganizationconfigruledetailedstatusrequest.GetOrganizationConfigRuleDetailedStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrganizationConfigRuleDetailedStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_config_rule_detailed_status_response: Optional[shared_getorganizationconfigruledetailedstatusresponse.GetOrganizationConfigRuleDetailedStatusResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_organization_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    
