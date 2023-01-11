import dataclasses
from typing import Optional


@dataclasses.dataclass
class HsmStatus:
    r"""HsmStatus
    Describes the status of changes to HSM settings.
    """
    
    hsm_client_certificate_identifier: Optional[str] = dataclasses.field(default=None)
    hsm_configuration_identifier: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
