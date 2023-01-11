import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getaggregatecompliancedetailsbyconfigrulerequest as shared_getaggregatecompliancedetailsbyconfigrulerequest
from ..shared import getaggregatecompliancedetailsbyconfigruleresponse as shared_getaggregatecompliancedetailsbyconfigruleresponse


@dataclasses.dataclass
class GetAggregateComplianceDetailsByConfigRuleQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_AGGREGATE_COMPLIANCE_DETAILS_BY_CONFIG_RULE = "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule"


@dataclasses.dataclass
class GetAggregateComplianceDetailsByConfigRuleHeaders:
    x_amz_target: GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAggregateComplianceDetailsByConfigRuleRequest:
    headers: GetAggregateComplianceDetailsByConfigRuleHeaders = dataclasses.field()
    query_params: GetAggregateComplianceDetailsByConfigRuleQueryParams = dataclasses.field()
    request: shared_getaggregatecompliancedetailsbyconfigrulerequest.GetAggregateComplianceDetailsByConfigRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAggregateComplianceDetailsByConfigRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aggregate_compliance_details_by_config_rule_response: Optional[shared_getaggregatecompliancedetailsbyconfigruleresponse.GetAggregateComplianceDetailsByConfigRuleResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_configuration_aggregator_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
