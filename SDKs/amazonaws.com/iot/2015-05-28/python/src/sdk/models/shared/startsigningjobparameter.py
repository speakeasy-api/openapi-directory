import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination
from ..shared import signingprofileparameter as shared_signingprofileparameter


@dataclass_json
@dataclasses.dataclass
class StartSigningJobParameter:
    r"""StartSigningJobParameter
    Information required to start a signing job.
    """
    
    destination: Optional[shared_destination.Destination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    signing_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingProfileName') }})
    signing_profile_parameter: Optional[shared_signingprofileparameter.SigningProfileParameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingProfileParameter') }})
    
