import dataclasses
from typing import Optional
from ..shared import transportdescriptor as shared_transportdescriptor


@dataclasses.dataclass
class TransportsSupported:
    r"""TransportsSupported
    'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
    """
    
    serializers: Optional[list[str]] = dataclasses.field(default=None)
    transport: Optional[shared_transportdescriptor.TransportDescriptor] = dataclasses.field(default=None)
    
