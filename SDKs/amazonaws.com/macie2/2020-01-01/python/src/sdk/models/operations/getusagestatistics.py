import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagestatisticssortkey_enum as shared_usagestatisticssortkey_enum
from ..shared import orderby_enum as shared_orderby_enum
from ..shared import usagestatisticsfilter as shared_usagestatisticsfilter
from ..shared import getusagestatisticsresponse as shared_getusagestatisticsresponse


@dataclasses.dataclass
class GetUsageStatisticsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsageStatisticsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetUsageStatisticsRequestBodySortBy:
    r"""GetUsageStatisticsRequestBodySortBy
    Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
    """
    
    key: Optional[shared_usagestatisticssortkey_enum.UsageStatisticsSortKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    order_by: Optional[shared_orderby_enum.OrderByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    
class GetUsageStatisticsRequestBodyTimeRangeEnum(str, Enum):
    MONTH_TO_DATE = "MONTH_TO_DATE"
    PAST_30_DAYS = "PAST_30_DAYS"


@dataclass_json
@dataclasses.dataclass
class GetUsageStatisticsRequestBody:
    filter_by: Optional[list[shared_usagestatisticsfilter.UsageStatisticsFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterBy') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[GetUsageStatisticsRequestBodySortBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    time_range: Optional[GetUsageStatisticsRequestBodyTimeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    

@dataclasses.dataclass
class GetUsageStatisticsRequest:
    headers: GetUsageStatisticsHeaders = dataclasses.field()
    query_params: GetUsageStatisticsQueryParams = dataclasses.field()
    request: GetUsageStatisticsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUsageStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    get_usage_statistics_response: Optional[shared_getusagestatisticsresponse.GetUsageStatisticsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
