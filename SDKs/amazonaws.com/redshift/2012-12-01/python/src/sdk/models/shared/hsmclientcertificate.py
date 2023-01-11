import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class HsmClientCertificate:
    r"""HsmClientCertificate
    Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
    """
    
    hsm_client_certificate_identifier: Optional[str] = dataclasses.field(default=None)
    hsm_client_certificate_public_key: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
