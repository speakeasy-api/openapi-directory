import dataclasses
from typing import Any,Optional
from ..shared import organicresult as shared_organicresult


@dataclasses.dataclass
class GetSearchV1OrganicQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    total_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'total_only', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchV1OrganicRequest:
    query_params: GetSearchV1OrganicQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchV1OrganicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    organic_result: Optional[shared_organicresult.OrganicResult] = dataclasses.field(default=None)
    
