import dataclasses
from typing import Any,Optional
from ..shared import transportdependency as shared_transportdependency


@dataclasses.dataclass
class ServiceDependency:
    ser_name: str = dataclasses.field()
    version: str = dataclasses.field()
    requested_permissions: Optional[list[str]] = dataclasses.field(default=None)
    ser_category: Optional[Any] = dataclasses.field(default=None)
    ser_transport_dependencies: Optional[list[shared_transportdependency.TransportDependency]] = dataclasses.field(default=None)
    
