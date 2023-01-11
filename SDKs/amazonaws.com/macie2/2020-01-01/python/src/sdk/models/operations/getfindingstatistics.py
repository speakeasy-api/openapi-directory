import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criterionadditionalproperties as shared_criterionadditionalproperties
from ..shared import findingstatisticssortattributename_enum as shared_findingstatisticssortattributename_enum
from ..shared import orderby_enum as shared_orderby_enum
from ..shared import getfindingstatisticsresponse as shared_getfindingstatisticsresponse


@dataclasses.dataclass
class GetFindingStatisticsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFindingStatisticsRequestBodyFindingCriteria:
    r"""GetFindingStatisticsRequestBodyFindingCriteria
    Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    """
    
    criterion: Optional[dict[str, shared_criterionadditionalproperties.CriterionAdditionalProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterion') }})
    
class GetFindingStatisticsRequestBodyGroupByEnum(str, Enum):
    RESOURCES_AFFECTED_S3_BUCKET_NAME = "resourcesAffected.s3Bucket.name"
    TYPE = "type"
    CLASSIFICATION_DETAILS_JOB_ID = "classificationDetails.jobId"
    SEVERITY_DESCRIPTION = "severity.description"


@dataclass_json
@dataclasses.dataclass
class GetFindingStatisticsRequestBodySortCriteria:
    r"""GetFindingStatisticsRequestBodySortCriteria
    Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
    """
    
    attribute_name: Optional[shared_findingstatisticssortattributename_enum.FindingStatisticsSortAttributeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    order_by: Optional[shared_orderby_enum.OrderByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFindingStatisticsRequestBody:
    group_by: GetFindingStatisticsRequestBodyGroupByEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBy') }})
    finding_criteria: Optional[GetFindingStatisticsRequestBodyFindingCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingCriteria') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sort_criteria: Optional[GetFindingStatisticsRequestBodySortCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortCriteria') }})
    

@dataclasses.dataclass
class GetFindingStatisticsRequest:
    headers: GetFindingStatisticsHeaders = dataclasses.field()
    request: GetFindingStatisticsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetFindingStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    get_finding_statistics_response: Optional[shared_getfindingstatisticsresponse.GetFindingStatisticsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
