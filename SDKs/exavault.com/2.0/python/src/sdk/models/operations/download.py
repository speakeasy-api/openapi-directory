import dataclasses
from typing import Optional


@dataclasses.dataclass
class DownloadQueryParams:
    resources_: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'resources[]', 'style': 'form', 'explode': True }})
    download_archive_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'downloadArchiveName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DownloadHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadRequest:
    headers: DownloadHeaders = dataclasses.field()
    query_params: DownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    download_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    download_200_application_zip_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
