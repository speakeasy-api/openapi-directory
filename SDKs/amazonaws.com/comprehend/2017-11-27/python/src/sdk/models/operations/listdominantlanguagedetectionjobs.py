import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdominantlanguagedetectionjobsrequest as shared_listdominantlanguagedetectionjobsrequest
from ..shared import listdominantlanguagedetectionjobsresponse as shared_listdominantlanguagedetectionjobsresponse


@dataclasses.dataclass
class ListDominantLanguageDetectionJobsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListDominantLanguageDetectionJobsXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS = "Comprehend_20171127.ListDominantLanguageDetectionJobs"


@dataclasses.dataclass
class ListDominantLanguageDetectionJobsHeaders:
    x_amz_target: ListDominantLanguageDetectionJobsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDominantLanguageDetectionJobsRequest:
    headers: ListDominantLanguageDetectionJobsHeaders = dataclasses.field()
    query_params: ListDominantLanguageDetectionJobsQueryParams = dataclasses.field()
    request: shared_listdominantlanguagedetectionjobsrequest.ListDominantLanguageDetectionJobsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDominantLanguageDetectionJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_filter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_dominant_language_detection_jobs_response: Optional[shared_listdominantlanguagedetectionjobsresponse.ListDominantLanguageDetectionJobsResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
