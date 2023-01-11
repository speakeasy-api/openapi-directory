import dataclasses
from typing import Any,Optional
from ..shared import transportssupported as shared_transportssupported


@dataclasses.dataclass
class ServiceDescriptor:
    r"""ServiceDescriptor
    'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
    """
    
    ser_name: str = dataclasses.field()
    version: str = dataclasses.field()
    ser_category: Optional[Any] = dataclasses.field(default=None)
    transports_supported: Optional[shared_transportssupported.TransportsSupported] = dataclasses.field(default=None)
    
