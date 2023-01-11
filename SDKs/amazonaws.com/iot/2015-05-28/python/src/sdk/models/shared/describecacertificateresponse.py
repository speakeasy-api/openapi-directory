import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cacertificatedescription as shared_cacertificatedescription
from ..shared import registrationconfig as shared_registrationconfig


@dataclass_json
@dataclasses.dataclass
class DescribeCaCertificateResponse:
    r"""DescribeCaCertificateResponse
    The output from the DescribeCACertificate operation.
    """
    
    certificate_description: Optional[shared_cacertificatedescription.CaCertificateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    registration_config: Optional[shared_registrationconfig.RegistrationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationConfig') }})
    
