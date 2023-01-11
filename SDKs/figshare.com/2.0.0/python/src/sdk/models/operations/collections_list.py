import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import collection as shared_collection

class CollectionsListOrderEnum(str, Enum):
    PUBLISHED_DATE = "published_date"
    MODIFIED_DATE = "modified_date"
    VIEWS = "views"
    SHARES = "shares"
    CITES = "cites"

class CollectionsListOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class CollectionsListQueryParams:
    doi: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doi', 'style': 'form', 'explode': True }})
    group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    handle: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'handle', 'style': 'form', 'explode': True }})
    institution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'institution', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_since', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[CollectionsListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_direction: Optional[CollectionsListOrderDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    published_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_since', 'style': 'form', 'explode': True }})
    resource_doi: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resource_doi', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CollectionsListRequest:
    query_params: CollectionsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None)
    
