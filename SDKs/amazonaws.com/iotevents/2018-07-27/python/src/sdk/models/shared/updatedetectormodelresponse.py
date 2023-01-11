import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectormodelconfiguration as shared_detectormodelconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateDetectorModelResponse:
    detector_model_configuration: Optional[shared_detectormodelconfiguration.DetectorModelConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelConfiguration') }})
    
