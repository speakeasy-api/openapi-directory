import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetPredictiveScalingForecastActionEnum(str, Enum):
    GET_PREDICTIVE_SCALING_FORECAST = "GetPredictiveScalingForecast"

class GetGetPredictiveScalingForecastVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclasses.dataclass
class GetGetPredictiveScalingForecastQueryParams:
    action: GetGetPredictiveScalingForecastActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    end_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    policy_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PolicyName', 'style': 'form', 'explode': True }})
    start_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetGetPredictiveScalingForecastVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPredictiveScalingForecastHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGetPredictiveScalingForecastRequest:
    headers: GetGetPredictiveScalingForecastHeaders = dataclasses.field()
    query_params: GetGetPredictiveScalingForecastQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPredictiveScalingForecastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
