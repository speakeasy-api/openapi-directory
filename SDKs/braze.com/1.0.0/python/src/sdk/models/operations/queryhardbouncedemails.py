import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class QueryHardBouncedEmailsQueryParams:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QueryHardBouncedEmailsRequest:
    query_params: QueryHardBouncedEmailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class QueryHardBouncedEmailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
