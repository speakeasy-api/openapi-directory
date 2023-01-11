import dataclasses
from ..shared import transportdescriptor as shared_transportdescriptor


@dataclasses.dataclass
class TransportDependency:
    labels: list[str] = dataclasses.field()
    serializers: list[str] = dataclasses.field()
    transport: shared_transportdescriptor.TransportDescriptor = dataclasses.field()
    
