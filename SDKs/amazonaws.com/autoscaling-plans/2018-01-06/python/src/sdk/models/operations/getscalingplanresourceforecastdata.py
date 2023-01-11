import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getscalingplanresourceforecastdatarequest as shared_getscalingplanresourceforecastdatarequest
from ..shared import getscalingplanresourceforecastdataresponse as shared_getscalingplanresourceforecastdataresponse

class GetScalingPlanResourceForecastDataXAmzTargetEnum(str, Enum):
    ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_GET_SCALING_PLAN_RESOURCE_FORECAST_DATA = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"


@dataclasses.dataclass
class GetScalingPlanResourceForecastDataHeaders:
    x_amz_target: GetScalingPlanResourceForecastDataXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScalingPlanResourceForecastDataRequest:
    headers: GetScalingPlanResourceForecastDataHeaders = dataclasses.field()
    request: shared_getscalingplanresourceforecastdatarequest.GetScalingPlanResourceForecastDataRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetScalingPlanResourceForecastDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_scaling_plan_resource_forecast_data_response: Optional[shared_getscalingplanresourceforecastdataresponse.GetScalingPlanResourceForecastDataResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
