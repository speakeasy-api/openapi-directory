import dataclasses
from typing import Optional
from enum import Enum
from ..shared import eventdetailfieldvalues_enum as shared_eventdetailfieldvalues_enum


@dataclasses.dataclass
class GetV3EventsQueryParams:
    fields: Optional[list[shared_eventdetailfieldvalues_enum.EventDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3EventsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3EventsRequest:
    headers: GetV3EventsHeaders = dataclasses.field()
    query_params: GetV3EventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3EventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
