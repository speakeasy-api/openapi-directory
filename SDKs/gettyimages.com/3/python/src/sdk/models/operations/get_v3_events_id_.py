import dataclasses
from typing import Optional
from enum import Enum
from ..shared import eventdetailfieldvalues_enum as shared_eventdetailfieldvalues_enum


@dataclasses.dataclass
class GetV3EventsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3EventsIDQueryParams:
    fields: Optional[list[shared_eventdetailfieldvalues_enum.EventDetailFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetV3EventsIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3EventsIDRequest:
    headers: GetV3EventsIDHeaders = dataclasses.field()
    path_params: GetV3EventsIDPathParams = dataclasses.field()
    query_params: GetV3EventsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3EventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
