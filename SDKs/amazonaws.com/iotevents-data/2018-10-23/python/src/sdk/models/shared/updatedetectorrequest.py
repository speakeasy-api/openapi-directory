import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectorstatedefinition as shared_detectorstatedefinition


@dataclass_json
@dataclasses.dataclass
class UpdateDetectorRequest:
    r"""UpdateDetectorRequest
    Information used to update the detector (instance).
    """
    
    detector_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    message_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    state: shared_detectorstatedefinition.DetectorStateDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    key_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    
