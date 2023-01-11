import dataclasses
from typing import Optional
from ..shared import assetdownloadhistoryresults as shared_assetdownloadhistoryresults


@dataclasses.dataclass
class GetV3ImagesIDDownloadhistoryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV3ImagesIDDownloadhistoryHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3ImagesIDDownloadhistoryRequest:
    headers: GetV3ImagesIDDownloadhistoryHeaders = dataclasses.field()
    path_params: GetV3ImagesIDDownloadhistoryPathParams = dataclasses.field()
    query_params: GetV3ImagesIDDownloadhistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3ImagesIDDownloadhistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_download_history_results: Optional[shared_assetdownloadhistoryresults.AssetDownloadHistoryResults] = dataclasses.field(default=None)
    
