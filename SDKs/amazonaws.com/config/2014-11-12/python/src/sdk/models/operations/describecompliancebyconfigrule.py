import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecompliancebyconfigrulerequest as shared_describecompliancebyconfigrulerequest
from ..shared import describecompliancebyconfigruleresponse as shared_describecompliancebyconfigruleresponse


@dataclasses.dataclass
class DescribeComplianceByConfigRuleQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeComplianceByConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_CONFIG_RULE = "StarlingDoveService.DescribeComplianceByConfigRule"


@dataclasses.dataclass
class DescribeComplianceByConfigRuleHeaders:
    x_amz_target: DescribeComplianceByConfigRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeComplianceByConfigRuleRequest:
    headers: DescribeComplianceByConfigRuleHeaders = dataclasses.field()
    query_params: DescribeComplianceByConfigRuleQueryParams = dataclasses.field()
    request: shared_describecompliancebyconfigrulerequest.DescribeComplianceByConfigRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeComplianceByConfigRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_compliance_by_config_rule_response: Optional[shared_describecompliancebyconfigruleresponse.DescribeComplianceByConfigRuleResponse] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    
