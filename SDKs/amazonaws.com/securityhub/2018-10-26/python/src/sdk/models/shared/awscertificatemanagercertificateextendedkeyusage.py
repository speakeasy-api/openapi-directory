import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsCertificateManagerCertificateExtendedKeyUsage:
    r"""AwsCertificateManagerCertificateExtendedKeyUsage
    Contains information about an extended key usage X.509 v3 extension object.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    o_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OId') }})
    
