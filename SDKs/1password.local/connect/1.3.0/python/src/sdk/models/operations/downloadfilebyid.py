import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DownloadFileByIDPathParams:
    file_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadFileByIDSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DownloadFileByIDRequest:
    path_params: DownloadFileByIDPathParams = dataclasses.field()
    security: DownloadFileByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadFileByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    download_file_by_id_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
