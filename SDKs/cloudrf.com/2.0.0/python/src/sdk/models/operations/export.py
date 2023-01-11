import dataclasses
from enum import Enum
from ..shared import security as shared_security

class ExportFmtEnum(str, Enum):
    KML = "kml"
    KMZPPA = "kmzppa"
    SHP = "shp"
    TIFF = "tiff"


@dataclasses.dataclass
class ExportQueryParams:
    file: str = dataclasses.field(metadata={'query_param': { 'field_name': 'file', 'style': 'form', 'explode': True }})
    fmt: ExportFmtEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'fmt', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportRequest:
    query_params: ExportQueryParams = dataclasses.field()
    security: ExportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
