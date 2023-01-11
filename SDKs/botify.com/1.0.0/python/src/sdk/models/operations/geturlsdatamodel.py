import dataclasses
from typing import Optional
from enum import Enum
from ..shared import crawldatamodel as shared_crawldatamodel
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUrlsDatamodelPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class GetUrlsDatamodelAreaEnum(str, Enum):
    CURRENT = "current"
    DISAPPEARED = "disappeared"
    NEW = "new"
    SEARCH_ENGINES_ORPHANS = "search_engines_orphans"


@dataclasses.dataclass
class GetUrlsDatamodelQueryParams:
    area: Optional[GetUrlsDatamodelAreaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'area', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUrlsDatamodelRequest:
    path_params: GetUrlsDatamodelPathParams = dataclasses.field()
    query_params: GetUrlsDatamodelQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUrlsDatamodelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crawl_datamodel: Optional[shared_crawldatamodel.CrawlDatamodel] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    
