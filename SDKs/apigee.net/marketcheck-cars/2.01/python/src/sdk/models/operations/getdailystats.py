import dataclasses
from typing import Optional
from enum import Enum
from ..shared import api_key_enum as shared_api_key_enum
from ..shared import api_key_enum8 as shared_api_key_enum8
from ..shared import dailystats as shared_dailystats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetDailyStatsQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    car_type: Optional[shared_api_key_enum.APIKeyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[shared_api_key_enum8.APIKeyEnum8] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    taxonomy_vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxonomy_vin', 'style': 'form', 'explode': True }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    ymm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ymm', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDailyStatsRequest:
    query_params: GetDailyStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDailyStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    daily_stats: Optional[shared_dailystats.DailyStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
