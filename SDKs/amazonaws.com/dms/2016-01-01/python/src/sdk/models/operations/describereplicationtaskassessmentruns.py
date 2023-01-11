import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describereplicationtaskassessmentrunsmessage as shared_describereplicationtaskassessmentrunsmessage
from ..shared import describereplicationtaskassessmentrunsresponse as shared_describereplicationtaskassessmentrunsresponse


@dataclasses.dataclass
class DescribeReplicationTaskAssessmentRunsQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeReplicationTaskAssessmentRunsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_TASK_ASSESSMENT_RUNS = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns"


@dataclasses.dataclass
class DescribeReplicationTaskAssessmentRunsHeaders:
    x_amz_target: DescribeReplicationTaskAssessmentRunsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeReplicationTaskAssessmentRunsRequest:
    headers: DescribeReplicationTaskAssessmentRunsHeaders = dataclasses.field()
    query_params: DescribeReplicationTaskAssessmentRunsQueryParams = dataclasses.field()
    request: shared_describereplicationtaskassessmentrunsmessage.DescribeReplicationTaskAssessmentRunsMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeReplicationTaskAssessmentRunsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_replication_task_assessment_runs_response: Optional[shared_describereplicationtaskassessmentrunsresponse.DescribeReplicationTaskAssessmentRunsResponse] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
