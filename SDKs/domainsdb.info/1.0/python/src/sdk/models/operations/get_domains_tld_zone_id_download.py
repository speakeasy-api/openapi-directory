import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetDomainsTldZoneIDDownloadPathParams:
    zone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'zone_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainsTldZoneIDDownloadQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDomainsTldZoneIDDownloadRequest:
    path_params: GetDomainsTldZoneIDDownloadPathParams = dataclasses.field()
    query_params: GetDomainsTldZoneIDDownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsTldZoneIDDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
