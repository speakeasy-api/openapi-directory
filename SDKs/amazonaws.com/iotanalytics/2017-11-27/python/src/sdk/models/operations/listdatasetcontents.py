import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listdatasetcontentsresponse as shared_listdatasetcontentsresponse


@dataclasses.dataclass
class ListDatasetContentsPathParams:
    dataset_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDatasetContentsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    scheduled_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduledBefore', 'style': 'form', 'explode': True }})
    scheduled_on_or_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduledOnOrAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDatasetContentsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDatasetContentsRequest:
    headers: ListDatasetContentsHeaders = dataclasses.field()
    path_params: ListDatasetContentsPathParams = dataclasses.field()
    query_params: ListDatasetContentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDatasetContentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_dataset_contents_response: Optional[shared_listdatasetcontentsresponse.ListDatasetContentsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
