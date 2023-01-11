import dataclasses
from typing import Optional
from enum import Enum
from ..shared import downloadfiletype_enum as shared_downloadfiletype_enum
from ..shared import producttyperequest_enum as shared_producttyperequest_enum
from ..shared import premiumaccessdownloaddata as shared_premiumaccessdownloaddata


@dataclasses.dataclass
class PostV3DownloadsImagesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3DownloadsImagesIDQueryParams:
    auto_download: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'auto_download', 'style': 'form', 'explode': True }})
    file_type: Optional[shared_downloadfiletype_enum.DownloadFileTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_type', 'style': 'form', 'explode': True }})
    height: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    product_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_id', 'style': 'form', 'explode': True }})
    product_type: Optional[shared_producttyperequest_enum.ProductTypeRequestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    use_team_credits: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'use_team_credits', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostV3DownloadsImagesIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3DownloadsImagesIDRequests:
    premium_access_download_data: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    premium_access_download_data1: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    premium_access_download_data2: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    premium_access_download_data3: Optional[shared_premiumaccessdownloaddata.PremiumAccessDownloadData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostV3DownloadsImagesIDRequest:
    headers: PostV3DownloadsImagesIDHeaders = dataclasses.field()
    path_params: PostV3DownloadsImagesIDPathParams = dataclasses.field()
    query_params: PostV3DownloadsImagesIDQueryParams = dataclasses.field()
    request: Optional[PostV3DownloadsImagesIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV3DownloadsImagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
