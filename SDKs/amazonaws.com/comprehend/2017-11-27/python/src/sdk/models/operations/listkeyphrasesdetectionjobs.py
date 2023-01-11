import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listkeyphrasesdetectionjobsrequest as shared_listkeyphrasesdetectionjobsrequest
from ..shared import listkeyphrasesdetectionjobsresponse as shared_listkeyphrasesdetectionjobsresponse


@dataclasses.dataclass
class ListKeyPhrasesDetectionJobsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListKeyPhrasesDetectionJobsXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_LIST_KEY_PHRASES_DETECTION_JOBS = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"


@dataclasses.dataclass
class ListKeyPhrasesDetectionJobsHeaders:
    x_amz_target: ListKeyPhrasesDetectionJobsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListKeyPhrasesDetectionJobsRequest:
    headers: ListKeyPhrasesDetectionJobsHeaders = dataclasses.field()
    query_params: ListKeyPhrasesDetectionJobsQueryParams = dataclasses.field()
    request: shared_listkeyphrasesdetectionjobsrequest.ListKeyPhrasesDetectionJobsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListKeyPhrasesDetectionJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_filter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_key_phrases_detection_jobs_response: Optional[shared_listkeyphrasesdetectionjobsresponse.ListKeyPhrasesDetectionJobsResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
