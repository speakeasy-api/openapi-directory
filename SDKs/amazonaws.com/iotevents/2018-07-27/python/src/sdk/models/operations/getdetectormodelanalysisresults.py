import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getdetectormodelanalysisresultsresponse as shared_getdetectormodelanalysisresultsresponse


@dataclasses.dataclass
class GetDetectorModelAnalysisResultsPathParams:
    analysis_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysisId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDetectorModelAnalysisResultsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDetectorModelAnalysisResultsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDetectorModelAnalysisResultsRequest:
    headers: GetDetectorModelAnalysisResultsHeaders = dataclasses.field()
    path_params: GetDetectorModelAnalysisResultsPathParams = dataclasses.field()
    query_params: GetDetectorModelAnalysisResultsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDetectorModelAnalysisResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_detector_model_analysis_results_response: Optional[shared_getdetectormodelanalysisresultsresponse.GetDetectorModelAnalysisResultsResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
