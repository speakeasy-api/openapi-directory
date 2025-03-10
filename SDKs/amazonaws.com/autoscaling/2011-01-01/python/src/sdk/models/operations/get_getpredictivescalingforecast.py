"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from datetime import datetime
from enum import Enum
from typing import Optional

class GETGETPredictiveScalingForecastActionEnum(str, Enum):
    GET_PREDICTIVE_SCALING_FORECAST = 'GetPredictiveScalingForecast'

class GETGETPredictiveScalingForecastVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = '2011-01-01'


@dataclasses.dataclass
class GETGETPredictiveScalingForecastRequest:
    
    action: GETGETPredictiveScalingForecastActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})  
    auto_scaling_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    r"""The name of the Auto Scaling group."""  
    end_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    r"""<p>The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days. </p> <p>Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for periods of two days in advance.</p>"""  
    policy_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'PolicyName', 'style': 'form', 'explode': True }})
    r"""The name of the policy."""  
    start_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    r"""The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time."""  
    version: GETGETPredictiveScalingForecastVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GETGETPredictiveScalingForecastResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    