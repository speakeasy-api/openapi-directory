import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listpipelinesinput as shared_listpipelinesinput
from ..shared import listpipelinesoutput as shared_listpipelinesoutput


@dataclasses.dataclass
class ListPipelinesQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'marker', 'style': 'form', 'explode': True }})
    
class ListPipelinesXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_LIST_PIPELINES = "DataPipeline.ListPipelines"


@dataclasses.dataclass
class ListPipelinesHeaders:
    x_amz_target: ListPipelinesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPipelinesRequest:
    headers: ListPipelinesHeaders = dataclasses.field()
    query_params: ListPipelinesQueryParams = dataclasses.field()
    request: shared_listpipelinesinput.ListPipelinesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListPipelinesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_pipelines_output: Optional[shared_listpipelinesoutput.ListPipelinesOutput] = dataclasses.field(default=None)
    
