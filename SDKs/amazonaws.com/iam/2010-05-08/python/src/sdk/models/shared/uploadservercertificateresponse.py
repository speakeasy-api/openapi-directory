import dataclasses
from typing import Optional
from ..shared import servercertificatemetadata as shared_servercertificatemetadata
from ..shared import tag as shared_tag


@dataclasses.dataclass
class UploadServerCertificateResponse:
    r"""UploadServerCertificateResponse
    Contains the response to a successful <a>UploadServerCertificate</a> request. 
    """
    
    server_certificate_metadata: Optional[shared_servercertificatemetadata.ServerCertificateMetadata] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
