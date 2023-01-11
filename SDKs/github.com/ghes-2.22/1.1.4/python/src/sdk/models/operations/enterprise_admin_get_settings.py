import dataclasses
from typing import Optional
from ..shared import enterprise_settings as shared_enterprise_settings


@dataclasses.dataclass
class EnterpriseAdminGetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_settings: Optional[shared_enterprise_settings.EnterpriseSettings] = dataclasses.field(default=None)
    
