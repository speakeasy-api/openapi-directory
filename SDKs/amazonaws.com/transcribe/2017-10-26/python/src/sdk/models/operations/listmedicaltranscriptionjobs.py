import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listmedicaltranscriptionjobsrequest as shared_listmedicaltranscriptionjobsrequest
from ..shared import listmedicaltranscriptionjobsresponse as shared_listmedicaltranscriptionjobsresponse


@dataclasses.dataclass
class ListMedicalTranscriptionJobsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListMedicalTranscriptionJobsXAmzTargetEnum(str, Enum):
    TRANSCRIBE_LIST_MEDICAL_TRANSCRIPTION_JOBS = "Transcribe.ListMedicalTranscriptionJobs"


@dataclasses.dataclass
class ListMedicalTranscriptionJobsHeaders:
    x_amz_target: ListMedicalTranscriptionJobsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMedicalTranscriptionJobsRequest:
    headers: ListMedicalTranscriptionJobsHeaders = dataclasses.field()
    query_params: ListMedicalTranscriptionJobsQueryParams = dataclasses.field()
    request: shared_listmedicaltranscriptionjobsrequest.ListMedicalTranscriptionJobsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListMedicalTranscriptionJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_medical_transcription_jobs_response: Optional[shared_listmedicaltranscriptionjobsresponse.ListMedicalTranscriptionJobsResponse] = dataclasses.field(default=None)
    
