import dataclasses
from ..shared import servercertificate as shared_servercertificate


@dataclasses.dataclass
class GetServerCertificateResponse:
    r"""GetServerCertificateResponse
    Contains the response to a successful <a>GetServerCertificate</a> request. 
    """
    
    server_certificate: shared_servercertificate.ServerCertificate = dataclasses.field()
    
