import dataclasses
from typing import Optional
from ..shared import pre_receive_environment_download_status as shared_pre_receive_environment_download_status


@dataclasses.dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_environment_download_status: Optional[shared_pre_receive_environment_download_status.PreReceiveEnvironmentDownloadStatus] = dataclasses.field(default=None)
    
