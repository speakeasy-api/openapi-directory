import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import editorialsegmentcontract_enum as shared_editorialsegmentcontract_enum
from ..shared import eventfieldvalues_enum as shared_eventfieldvalues_enum
from ..shared import eventssearchresult as shared_eventssearchresult


@dataclasses.dataclass
class GetV3SearchEventsQueryParams:
    date_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    editorial_segment: Optional[shared_editorialsegmentcontract_enum.EditorialSegmentContractEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'editorial_segment', 'style': 'form', 'explode': True }})
    fields: Optional[list[shared_eventfieldvalues_enum.EventFieldValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3SearchEventsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3SearchEventsRequest:
    headers: GetV3SearchEventsHeaders = dataclasses.field()
    query_params: GetV3SearchEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3SearchEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_search_result: Optional[shared_eventssearchresult.EventsSearchResult] = dataclasses.field(default=None)
    
