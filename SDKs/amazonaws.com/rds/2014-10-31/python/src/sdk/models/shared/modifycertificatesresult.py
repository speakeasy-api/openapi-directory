import dataclasses
from typing import Optional
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class ModifyCertificatesResult:
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None)
    
