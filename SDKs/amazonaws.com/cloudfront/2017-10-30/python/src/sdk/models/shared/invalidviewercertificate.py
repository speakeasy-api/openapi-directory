import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidViewerCertificate:
    message: Optional[str] = dataclasses.field(default=None)
    
