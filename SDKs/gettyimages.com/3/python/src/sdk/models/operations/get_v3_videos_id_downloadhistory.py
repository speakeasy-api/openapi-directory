import dataclasses
from typing import Optional
from ..shared import assetdownloadhistoryresults as shared_assetdownloadhistoryresults


@dataclasses.dataclass
class GetV3VideosIDDownloadhistoryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3VideosIDDownloadhistoryHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3VideosIDDownloadhistoryRequest:
    headers: GetV3VideosIDDownloadhistoryHeaders = dataclasses.field()
    path_params: GetV3VideosIDDownloadhistoryPathParams = dataclasses.field()
    query_params: GetV3VideosIDDownloadhistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3VideosIDDownloadhistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_download_history_results: Optional[shared_assetdownloadhistoryresults.AssetDownloadHistoryResults] = dataclasses.field(default=None)
    
