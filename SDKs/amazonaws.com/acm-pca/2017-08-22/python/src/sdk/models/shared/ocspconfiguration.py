import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OcspConfiguration:
    r"""OcspConfiguration
    <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
    """
    
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    ocsp_custom_cname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcspCustomCname') }})
    
