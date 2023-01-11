import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AppExternalCpd:
    inherited_attributes: dict[str, Any] = dataclasses.field()
    virtual_network_interface_requirements: Optional[list[str]] = dataclasses.field(default=None)
    
