import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import file as shared_file


@dataclasses.dataclass
class GetItemFilesPathParams:
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemFilesQueryParams:
    inline_files: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inline_files', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetItemFilesSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetItemFilesRequest:
    path_params: GetItemFilesPathParams = dataclasses.field()
    query_params: GetItemFilesQueryParams = dataclasses.field()
    security: GetItemFilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetItemFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    files: Optional[list[shared_file.File]] = dataclasses.field(default=None)
    
