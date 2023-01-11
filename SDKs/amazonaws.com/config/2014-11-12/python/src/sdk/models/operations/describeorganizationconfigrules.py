import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeorganizationconfigrulesrequest as shared_describeorganizationconfigrulesrequest
from ..shared import describeorganizationconfigrulesresponse as shared_describeorganizationconfigrulesresponse


@dataclasses.dataclass
class DescribeOrganizationConfigRulesQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeOrganizationConfigRulesXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFIG_RULES = "StarlingDoveService.DescribeOrganizationConfigRules"


@dataclasses.dataclass
class DescribeOrganizationConfigRulesHeaders:
    x_amz_target: DescribeOrganizationConfigRulesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeOrganizationConfigRulesRequest:
    headers: DescribeOrganizationConfigRulesHeaders = dataclasses.field()
    query_params: DescribeOrganizationConfigRulesQueryParams = dataclasses.field()
    request: shared_describeorganizationconfigrulesrequest.DescribeOrganizationConfigRulesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeOrganizationConfigRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_organization_config_rules_response: Optional[shared_describeorganizationconfigrulesresponse.DescribeOrganizationConfigRulesResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_organization_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    
