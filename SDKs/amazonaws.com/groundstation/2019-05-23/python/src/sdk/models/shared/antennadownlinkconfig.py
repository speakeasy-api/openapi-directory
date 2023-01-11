import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import spectrumconfig as shared_spectrumconfig


@dataclass_json
@dataclasses.dataclass
class AntennaDownlinkConfig:
    r"""AntennaDownlinkConfig
    Information about how AWS Ground Station should configure an antenna for downlink during a contact.
    """
    
    spectrum_config: shared_spectrumconfig.SpectrumConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    
