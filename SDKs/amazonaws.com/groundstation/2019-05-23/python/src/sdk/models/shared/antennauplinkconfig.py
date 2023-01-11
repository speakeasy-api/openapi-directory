import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uplinkspectrumconfig as shared_uplinkspectrumconfig
from ..shared import eirp as shared_eirp


@dataclass_json
@dataclasses.dataclass
class AntennaUplinkConfig:
    r"""AntennaUplinkConfig
    Information about the uplink <code>Config</code> of an antenna.
    """
    
    spectrum_config: shared_uplinkspectrumconfig.UplinkSpectrumConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    target_eirp: shared_eirp.Eirp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetEirp') }})
    transmit_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmitDisabled') }})
    
