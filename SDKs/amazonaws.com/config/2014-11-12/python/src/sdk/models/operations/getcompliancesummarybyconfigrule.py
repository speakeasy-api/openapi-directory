import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import getcompliancesummarybyconfigruleresponse as shared_getcompliancesummarybyconfigruleresponse

class GetComplianceSummaryByConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_CONFIG_RULE = "StarlingDoveService.GetComplianceSummaryByConfigRule"


@dataclasses.dataclass
class GetComplianceSummaryByConfigRuleHeaders:
    x_amz_target: GetComplianceSummaryByConfigRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetComplianceSummaryByConfigRuleRequest:
    headers: GetComplianceSummaryByConfigRuleHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetComplianceSummaryByConfigRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_compliance_summary_by_config_rule_response: Optional[shared_getcompliancesummarybyconfigruleresponse.GetComplianceSummaryByConfigRuleResponse] = dataclasses.field(default=None)
    
