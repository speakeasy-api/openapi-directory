import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import measurementprocessingconfig as shared_measurementprocessingconfig


@dataclass_json
@dataclasses.dataclass
class Measurement:
    r"""Measurement
    Contains an asset measurement property. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements\">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
    """
    
    processing_config: Optional[shared_measurementprocessingconfig.MeasurementProcessingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processingConfig') }})
    
