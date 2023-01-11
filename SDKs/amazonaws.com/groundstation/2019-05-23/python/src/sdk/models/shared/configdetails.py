import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import antennademoddecodedetails as shared_antennademoddecodedetails
from ..shared import endpointdetails as shared_endpointdetails
from ..shared import s3recordingdetails as shared_s3recordingdetails


@dataclass_json
@dataclasses.dataclass
class ConfigDetails:
    r"""ConfigDetails
    Details for certain <code>Config</code> object types in a contact.
    """
    
    antenna_demod_decode_details: Optional[shared_antennademoddecodedetails.AntennaDemodDecodeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDemodDecodeDetails') }})
    endpoint_details: Optional[shared_endpointdetails.EndpointDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointDetails') }})
    s3_recording_details: Optional[shared_s3recordingdetails.S3RecordingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3RecordingDetails') }})
    
