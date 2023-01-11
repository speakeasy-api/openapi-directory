import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import producttyperequest_enum as shared_producttyperequest_enum
from ..shared import getdownloadsresponse as shared_getdownloadsresponse


@dataclasses.dataclass
class GetV3DownloadsQueryParams:
    company_downloads: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_type: Optional[shared_producttyperequest_enum.ProductTypeRequestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    use_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_time', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3DownloadsHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3DownloadsRequest:
    headers: GetV3DownloadsHeaders = dataclasses.field()
    query_params: GetV3DownloadsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3DownloadsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_downloads_response: Optional[shared_getdownloadsresponse.GetDownloadsResponse] = dataclasses.field(default=None)
    
