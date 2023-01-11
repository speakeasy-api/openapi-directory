import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetDomainsUpdatesAddedDownloadQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDomainsUpdatesAddedDownloadRequest:
    query_params: GetDomainsUpdatesAddedDownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsUpdatesAddedDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
