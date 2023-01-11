import dataclasses
from typing import Optional
from ..shared import servercertificatemetadata as shared_servercertificatemetadata
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ServerCertificate:
    r"""ServerCertificate
    <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
    """
    
    certificate_body: str = dataclasses.field()
    server_certificate_metadata: shared_servercertificatemetadata.ServerCertificateMetadata = dataclasses.field()
    certificate_chain: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
