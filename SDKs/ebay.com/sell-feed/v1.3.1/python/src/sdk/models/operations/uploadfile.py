import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import formdatacontentdisposition as shared_formdatacontentdisposition


@dataclasses.dataclass
class UploadFilePathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadFileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UploadFileRequest:
    path_params: UploadFilePathParams = dataclasses.field()
    security: UploadFileSecurity = dataclasses.field()
    request: Optional[shared_formdatacontentdisposition.FormDataContentDisposition] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    upload_file_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
