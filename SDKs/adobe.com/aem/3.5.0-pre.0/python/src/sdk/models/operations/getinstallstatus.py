import dataclasses
from typing import Optional
from ..shared import installstatus as shared_installstatus


@dataclasses.dataclass
class GetInstallStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    install_status: Optional[shared_installstatus.InstallStatus] = dataclasses.field(default=None)
    get_install_status_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
