import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetInsightRuleReportActionEnum(str, Enum):
    GET_INSIGHT_RULE_REPORT = "GetInsightRuleReport"

class GetGetInsightRuleReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclasses.dataclass
class GetGetInsightRuleReportQueryParams:
    action: GetGetInsightRuleReportActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    end_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    period: int = dataclasses.field(metadata={'query_param': { 'field_name': 'Period', 'style': 'form', 'explode': True }})
    rule_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'RuleName', 'style': 'form', 'explode': True }})
    start_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetGetInsightRuleReportVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    max_contributor_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxContributorCount', 'style': 'form', 'explode': True }})
    metrics: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OrderBy', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetInsightRuleReportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetInsightRuleReportRequest:
    headers: GetGetInsightRuleReportHeaders = dataclasses.field()
    query_params: GetGetInsightRuleReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetInsightRuleReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
