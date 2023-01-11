import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import antennadownlinkconfig as shared_antennadownlinkconfig
from ..shared import antennadownlinkdemoddecodeconfig as shared_antennadownlinkdemoddecodeconfig
from ..shared import antennauplinkconfig as shared_antennauplinkconfig
from ..shared import dataflowendpointconfig as shared_dataflowendpointconfig
from ..shared import s3recordingconfig as shared_s3recordingconfig
from ..shared import trackingconfig as shared_trackingconfig
from ..shared import uplinkechoconfig as shared_uplinkechoconfig


@dataclass_json
@dataclasses.dataclass
class ConfigTypeData:
    r"""ConfigTypeData
    <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
    """
    
    antenna_downlink_config: Optional[shared_antennadownlinkconfig.AntennaDownlinkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkConfig') }})
    antenna_downlink_demod_decode_config: Optional[shared_antennadownlinkdemoddecodeconfig.AntennaDownlinkDemodDecodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkDemodDecodeConfig') }})
    antenna_uplink_config: Optional[shared_antennauplinkconfig.AntennaUplinkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaUplinkConfig') }})
    dataflow_endpoint_config: Optional[shared_dataflowendpointconfig.DataflowEndpointConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointConfig') }})
    s3_recording_config: Optional[shared_s3recordingconfig.S3RecordingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3RecordingConfig') }})
    tracking_config: Optional[shared_trackingconfig.TrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingConfig') }})
    uplink_echo_config: Optional[shared_uplinkechoconfig.UplinkEchoConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkEchoConfig') }})
    
