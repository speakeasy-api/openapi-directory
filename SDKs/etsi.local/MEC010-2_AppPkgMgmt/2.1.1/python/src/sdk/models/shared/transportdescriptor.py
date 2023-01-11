import dataclasses
from typing import Any


@dataclasses.dataclass
class TransportDescriptor:
    protocol: str = dataclasses.field()
    security: Any = dataclasses.field()
    type: str = dataclasses.field()
    version: str = dataclasses.field()
    
