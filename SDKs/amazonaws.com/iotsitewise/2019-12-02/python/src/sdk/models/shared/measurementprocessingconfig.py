import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardingconfig as shared_forwardingconfig


@dataclass_json
@dataclasses.dataclass
class MeasurementProcessingConfig:
    r"""MeasurementProcessingConfig
    The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
    """
    
    forwarding_config: shared_forwardingconfig.ForwardingConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardingConfig') }})
    
