import dataclasses
from typing import Optional
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class DescribeListenerCertificatesOutput:
    certificates: Optional[list[shared_certificate.Certificate]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
