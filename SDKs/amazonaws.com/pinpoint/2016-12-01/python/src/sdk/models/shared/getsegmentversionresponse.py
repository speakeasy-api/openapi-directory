import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentresponse as shared_segmentresponse


@dataclass_json
@dataclasses.dataclass
class GetSegmentVersionResponse:
    segment_response: shared_segmentresponse.SegmentResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentResponse') }})
    
