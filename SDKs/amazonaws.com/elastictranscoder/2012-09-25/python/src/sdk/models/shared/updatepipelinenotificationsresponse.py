import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipeline as shared_pipeline


@dataclass_json
@dataclasses.dataclass
class UpdatePipelineNotificationsResponse:
    r"""UpdatePipelineNotificationsResponse
    The <code>UpdatePipelineNotificationsResponse</code> structure.
    """
    
    pipeline: Optional[shared_pipeline.Pipeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    
