import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetAllApIsQueryParams:
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdBy', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    is_public: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isPublic', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'summary', 'style': 'form', 'explode': True }})
    until: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedBy', 'style': 'form', 'explode': True }})
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllApIsRequest:
    query_params: GetAllApIsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllApIsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
