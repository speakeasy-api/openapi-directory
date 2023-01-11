import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingstrategyname_enum as shared_samplingstrategyname_enum
from ..shared import gettracesummariesresult as shared_gettracesummariesresult


@dataclasses.dataclass
class GetTraceSummariesQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTraceSummariesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTraceSummariesRequestBodySamplingStrategy:
    r"""GetTraceSummariesRequestBodySamplingStrategy
    The name and value of a sampling rule to apply to a trace summary.
    """
    
    name: Optional[shared_samplingstrategyname_enum.SamplingStrategyNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
class GetTraceSummariesRequestBodyTimeRangeTypeEnum(str, Enum):
    TRACE_ID = "TraceId"
    EVENT = "Event"


@dataclass_json
@dataclasses.dataclass
class GetTraceSummariesRequestBody:
    end_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterExpression') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sampling: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sampling') }})
    sampling_strategy: Optional[GetTraceSummariesRequestBodySamplingStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingStrategy') }})
    time_range_type: Optional[GetTraceSummariesRequestBodyTimeRangeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeRangeType') }})
    

@dataclasses.dataclass
class GetTraceSummariesRequest:
    headers: GetTraceSummariesHeaders = dataclasses.field()
    query_params: GetTraceSummariesQueryParams = dataclasses.field()
    request: GetTraceSummariesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTraceSummariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_trace_summaries_result: Optional[shared_gettracesummariesresult.GetTraceSummariesResult] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
