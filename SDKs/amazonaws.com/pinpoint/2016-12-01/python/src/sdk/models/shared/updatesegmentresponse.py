import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentresponse as shared_segmentresponse


@dataclass_json
@dataclasses.dataclass
class UpdateSegmentResponse:
    segment_response: shared_segmentresponse.SegmentResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentResponse') }})
    
