import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAssociatedEnclaveCertificateIamRolesResult:
    associated_roles: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
