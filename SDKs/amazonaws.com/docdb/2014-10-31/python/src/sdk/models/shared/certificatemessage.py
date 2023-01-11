import dataclasses
from typing import Optional
from ..shared import certificatelist as shared_certificatelist


@dataclasses.dataclass
class CertificateMessage:
    certificates: Optional[list[shared_certificatelist.CertificateList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
