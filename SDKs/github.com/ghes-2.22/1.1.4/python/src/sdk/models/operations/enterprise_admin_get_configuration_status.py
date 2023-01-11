import dataclasses
from typing import Optional
from ..shared import configuration_status as shared_configuration_status


@dataclasses.dataclass
class EnterpriseAdminGetConfigurationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    configuration_status: Optional[shared_configuration_status.ConfigurationStatus] = dataclasses.field(default=None)
    
