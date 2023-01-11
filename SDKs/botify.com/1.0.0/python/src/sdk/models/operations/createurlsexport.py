import dataclasses
from typing import Optional
from enum import Enum
from ..shared import urlsquery as shared_urlsquery
from ..shared import csvexportstatus as shared_csvexportstatus
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class CreateUrlsExportPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class CreateUrlsExportAreaEnum(str, Enum):
    CURRENT = "current"
    DISAPPEARED = "disappeared"
    NEW = "new"
    SEARCH_ENGINES_ORPHANS = "search_engines_orphans"


@dataclasses.dataclass
class CreateUrlsExportQueryParams:
    area: Optional[CreateUrlsExportAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateUrlsExportRequest:
    path_params: CreateUrlsExportPathParams = dataclasses.field()
    query_params: CreateUrlsExportQueryParams = dataclasses.field()
    request: Optional[shared_urlsquery.UrlsQuery] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateUrlsExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    csv_export_status: Optional[shared_csvexportstatus.CsvExportStatus] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    
