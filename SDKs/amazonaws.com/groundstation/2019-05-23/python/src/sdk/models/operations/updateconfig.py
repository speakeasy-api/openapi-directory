import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import antennadownlinkconfig as shared_antennadownlinkconfig
from ..shared import antennadownlinkdemoddecodeconfig as shared_antennadownlinkdemoddecodeconfig
from ..shared import antennauplinkconfig as shared_antennauplinkconfig
from ..shared import dataflowendpointconfig as shared_dataflowendpointconfig
from ..shared import s3recordingconfig as shared_s3recordingconfig
from ..shared import trackingconfig as shared_trackingconfig
from ..shared import uplinkechoconfig as shared_uplinkechoconfig
from ..shared import configidresponse as shared_configidresponse

class UpdateConfigConfigTypeEnum(str, Enum):
    ANTENNA_DOWNLINK = "antenna-downlink"
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode"
    ANTENNA_UPLINK = "antenna-uplink"
    DATAFLOW_ENDPOINT = "dataflow-endpoint"
    TRACKING = "tracking"
    UPLINK_ECHO = "uplink-echo"
    S3_RECORDING = "s3-recording"


@dataclasses.dataclass
class UpdateConfigPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    config_type: UpdateConfigConfigTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'configType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConfigRequestBodyConfigData:
    r"""UpdateConfigRequestBodyConfigData
    <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
    """
    
    antenna_downlink_config: Optional[shared_antennadownlinkconfig.AntennaDownlinkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkConfig') }})
    antenna_downlink_demod_decode_config: Optional[shared_antennadownlinkdemoddecodeconfig.AntennaDownlinkDemodDecodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaDownlinkDemodDecodeConfig') }})
    antenna_uplink_config: Optional[shared_antennauplinkconfig.AntennaUplinkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaUplinkConfig') }})
    dataflow_endpoint_config: Optional[shared_dataflowendpointconfig.DataflowEndpointConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointConfig') }})
    s3_recording_config: Optional[shared_s3recordingconfig.S3RecordingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3RecordingConfig') }})
    tracking_config: Optional[shared_trackingconfig.TrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingConfig') }})
    uplink_echo_config: Optional[shared_uplinkechoconfig.UplinkEchoConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkEchoConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConfigRequestBody:
    config_data: UpdateConfigRequestBodyConfigData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configData') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateConfigRequest:
    headers: UpdateConfigHeaders = dataclasses.field()
    path_params: UpdateConfigPathParams = dataclasses.field()
    request: UpdateConfigRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_id_response: Optional[shared_configidresponse.ConfigIDResponse] = dataclasses.field(default=None)
    dependency_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
