import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import decodeconfig as shared_decodeconfig
from ..shared import demodulationconfig as shared_demodulationconfig
from ..shared import spectrumconfig as shared_spectrumconfig


@dataclass_json
@dataclasses.dataclass
class AntennaDownlinkDemodDecodeConfig:
    r"""AntennaDownlinkDemodDecodeConfig
    Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
    """
    
    decode_config: shared_decodeconfig.DecodeConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decodeConfig') }})
    demodulation_config: shared_demodulationconfig.DemodulationConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('demodulationConfig') }})
    spectrum_config: shared_spectrumconfig.SpectrumConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    
