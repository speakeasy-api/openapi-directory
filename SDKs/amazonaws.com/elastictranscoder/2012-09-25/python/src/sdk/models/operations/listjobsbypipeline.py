import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listjobsbypipelineresponse as shared_listjobsbypipelineresponse


@dataclasses.dataclass
class ListJobsByPipelinePathParams:
    pipeline_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PipelineId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListJobsByPipelineQueryParams:
    ascending: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Ascending', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListJobsByPipelineHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListJobsByPipelineRequest:
    headers: ListJobsByPipelineHeaders = dataclasses.field()
    path_params: ListJobsByPipelinePathParams = dataclasses.field()
    query_params: ListJobsByPipelineQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListJobsByPipelineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    incompatible_version_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    list_jobs_by_pipeline_response: Optional[shared_listjobsbypipelineresponse.ListJobsByPipelineResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
