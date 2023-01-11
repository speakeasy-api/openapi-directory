import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getlensreviewreportoutput as shared_getlensreviewreportoutput


@dataclasses.dataclass
class GetLensReviewReportPathParams:
    lens_alias: str = dataclasses.field(metadata={'path_param': { 'field_name': 'LensAlias', 'style': 'simple', 'explode': False }})
    workload_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLensReviewReportQueryParams:
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MilestoneNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLensReviewReportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLensReviewReportRequest:
    headers: GetLensReviewReportHeaders = dataclasses.field()
    path_params: GetLensReviewReportPathParams = dataclasses.field()
    query_params: GetLensReviewReportQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLensReviewReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_lens_review_report_output: Optional[shared_getlensreviewreportoutput.GetLensReviewReportOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
