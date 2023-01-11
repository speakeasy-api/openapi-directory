import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import framemetric as shared_framemetric
from ..shared import batchgetframemetricdataresponse as shared_batchgetframemetricdataresponse


@dataclasses.dataclass
class BatchGetFrameMetricDataPathParams:
    profiling_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    
class BatchGetFrameMetricDataTargetResolutionEnum(str, Enum):
    PT5_M = "PT5M"
    PT1_H = "PT1H"
    P1_D = "P1D"


@dataclasses.dataclass
class BatchGetFrameMetricDataQueryParams:
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    period: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    target_resolution: Optional[BatchGetFrameMetricDataTargetResolutionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetResolution', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BatchGetFrameMetricDataHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchGetFrameMetricDataRequestBody:
    frame_metrics: Optional[list[shared_framemetric.FrameMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameMetrics') }})
    

@dataclasses.dataclass
class BatchGetFrameMetricDataRequest:
    headers: BatchGetFrameMetricDataHeaders = dataclasses.field()
    path_params: BatchGetFrameMetricDataPathParams = dataclasses.field()
    query_params: BatchGetFrameMetricDataQueryParams = dataclasses.field()
    request: BatchGetFrameMetricDataRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetFrameMetricDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_frame_metric_data_response: Optional[shared_batchgetframemetricdataresponse.BatchGetFrameMetricDataResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
