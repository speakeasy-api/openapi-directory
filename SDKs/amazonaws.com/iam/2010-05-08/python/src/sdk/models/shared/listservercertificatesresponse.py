import dataclasses
from typing import Optional
from ..shared import servercertificatemetadata as shared_servercertificatemetadata


@dataclasses.dataclass
class ListServerCertificatesResponse:
    r"""ListServerCertificatesResponse
    Contains the response to a successful <a>ListServerCertificates</a> request. 
    """
    
    server_certificate_metadata_list: list[shared_servercertificatemetadata.ServerCertificateMetadata] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
