import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeconfigruleevaluationstatusrequest as shared_describeconfigruleevaluationstatusrequest
from ..shared import describeconfigruleevaluationstatusresponse as shared_describeconfigruleevaluationstatusresponse


@dataclasses.dataclass
class DescribeConfigRuleEvaluationStatusQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeConfigRuleEvaluationStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_CONFIG_RULE_EVALUATION_STATUS = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"


@dataclasses.dataclass
class DescribeConfigRuleEvaluationStatusHeaders:
    x_amz_target: DescribeConfigRuleEvaluationStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeConfigRuleEvaluationStatusRequest:
    headers: DescribeConfigRuleEvaluationStatusHeaders = dataclasses.field()
    query_params: DescribeConfigRuleEvaluationStatusQueryParams = dataclasses.field()
    request: shared_describeconfigruleevaluationstatusrequest.DescribeConfigRuleEvaluationStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeConfigRuleEvaluationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_config_rule_evaluation_status_response: Optional[shared_describeconfigruleevaluationstatusresponse.DescribeConfigRuleEvaluationStatusResponse] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    
