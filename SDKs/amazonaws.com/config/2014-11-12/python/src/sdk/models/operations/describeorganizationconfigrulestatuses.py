import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeorganizationconfigrulestatusesrequest as shared_describeorganizationconfigrulestatusesrequest
from ..shared import describeorganizationconfigrulestatusesresponse as shared_describeorganizationconfigrulestatusesresponse


@dataclasses.dataclass
class DescribeOrganizationConfigRuleStatusesQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeOrganizationConfigRuleStatusesXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULE_STATUSES = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"


@dataclasses.dataclass
class DescribeOrganizationConfigRuleStatusesHeaders:
    x_amz_target: DescribeOrganizationConfigRuleStatusesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeOrganizationConfigRuleStatusesRequest:
    headers: DescribeOrganizationConfigRuleStatusesHeaders = dataclasses.field()
    query_params: DescribeOrganizationConfigRuleStatusesQueryParams = dataclasses.field()
    request: shared_describeorganizationconfigrulestatusesrequest.DescribeOrganizationConfigRuleStatusesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeOrganizationConfigRuleStatusesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_organization_config_rule_statuses_response: Optional[shared_describeorganizationconfigrulestatusesresponse.DescribeOrganizationConfigRuleStatusesResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_organization_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    
