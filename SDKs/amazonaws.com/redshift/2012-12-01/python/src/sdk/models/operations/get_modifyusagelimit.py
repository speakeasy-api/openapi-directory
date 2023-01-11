import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyUsageLimitActionEnum(str, Enum):
    MODIFY_USAGE_LIMIT = "ModifyUsageLimit"

class GetModifyUsageLimitBreachActionEnum(str, Enum):
    LOG = "log"
    EMIT_METRIC = "emit-metric"
    DISABLE = "disable"

class GetModifyUsageLimitVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclasses.dataclass
class GetModifyUsageLimitQueryParams:
    action: GetModifyUsageLimitActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    usage_limit_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'UsageLimitId', 'style': 'form', 'explode': True }})
    version: GetModifyUsageLimitVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Amount', 'style': 'form', 'explode': True }})
    breach_action: Optional[GetModifyUsageLimitBreachActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BreachAction', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyUsageLimitHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyUsageLimitRequest:
    headers: GetModifyUsageLimitHeaders = dataclasses.field()
    query_params: GetModifyUsageLimitQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyUsageLimitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
