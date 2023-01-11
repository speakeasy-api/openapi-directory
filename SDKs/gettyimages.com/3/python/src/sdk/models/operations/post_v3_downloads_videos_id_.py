import dataclasses
from typing import Optional
from ..shared import premiumaccessdownloaddata as shared_premiumaccessdownloaddata


@dataclasses.dataclass
class PostV3DownloadsVideosIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3DownloadsVideosIDQueryParams:
    auto_download: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auto_download', 'style': 'form', 'explode': True }})
    product_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_id', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    use_team_credits: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_team_credits', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostV3DownloadsVideosIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3DownloadsVideosIDRequests:
    premium_access_download_data: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    premium_access_download_data1: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    premium_access_download_data2: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    premium_access_download_data3: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostV3DownloadsVideosIDRequest:
    headers: PostV3DownloadsVideosIDHeaders = dataclasses.field()
    path_params: PostV3DownloadsVideosIDPathParams = dataclasses.field()
    query_params: PostV3DownloadsVideosIDQueryParams = dataclasses.field()
    request: Optional[PostV3DownloadsVideosIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV3DownloadsVideosIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
