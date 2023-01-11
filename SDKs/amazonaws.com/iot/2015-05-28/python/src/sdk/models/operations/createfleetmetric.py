import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationtypename_enum as shared_aggregationtypename_enum
from ..shared import tag as shared_tag
from ..shared import createfleetmetricresponse as shared_createfleetmetricresponse


@dataclasses.dataclass
class CreateFleetMetricPathParams:
    metric_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFleetMetricHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFleetMetricRequestBodyAggregationType:
    r"""CreateFleetMetricRequestBodyAggregationType
    The type of aggregation queries.
    """
    
    name: Optional[shared_aggregationtypename_enum.AggregationTypeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class CreateFleetMetricRequestBodyUnitEnum(str, Enum):
    SECONDS = "Seconds"
    MICROSECONDS = "Microseconds"
    MILLISECONDS = "Milliseconds"
    BYTES = "Bytes"
    KILOBYTES = "Kilobytes"
    MEGABYTES = "Megabytes"
    GIGABYTES = "Gigabytes"
    TERABYTES = "Terabytes"
    BITS = "Bits"
    KILOBITS = "Kilobits"
    MEGABITS = "Megabits"
    GIGABITS = "Gigabits"
    TERABITS = "Terabits"
    PERCENT = "Percent"
    COUNT = "Count"
    BYTES_SECOND = "Bytes/Second"
    KILOBYTES_SECOND = "Kilobytes/Second"
    MEGABYTES_SECOND = "Megabytes/Second"
    GIGABYTES_SECOND = "Gigabytes/Second"
    TERABYTES_SECOND = "Terabytes/Second"
    BITS_SECOND = "Bits/Second"
    KILOBITS_SECOND = "Kilobits/Second"
    MEGABITS_SECOND = "Megabits/Second"
    GIGABITS_SECOND = "Gigabits/Second"
    TERABITS_SECOND = "Terabits/Second"
    COUNT_SECOND = "Count/Second"
    NONE = "None"


@dataclass_json
@dataclasses.dataclass
class CreateFleetMetricRequestBody:
    aggregation_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationField') }})
    aggregation_type: CreateFleetMetricRequestBodyAggregationType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    period: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    query_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    unit: Optional[CreateFleetMetricRequestBodyUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclasses.dataclass
class CreateFleetMetricRequest:
    headers: CreateFleetMetricHeaders = dataclasses.field()
    path_params: CreateFleetMetricPathParams = dataclasses.field()
    request: CreateFleetMetricRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFleetMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_fleet_metric_response: Optional[shared_createfleetmetricresponse.CreateFleetMetricResponse] = dataclasses.field(default=None)
    index_not_ready_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_aggregation_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_query_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
