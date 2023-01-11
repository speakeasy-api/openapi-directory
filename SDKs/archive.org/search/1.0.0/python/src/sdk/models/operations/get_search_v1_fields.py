import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetSearchV1FieldsQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchV1FieldsRequest:
    query_params: GetSearchV1FieldsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchV1FieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    fields: Optional[list[str]] = dataclasses.field(default=None)
    
