import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentsresponse as shared_segmentsresponse


@dataclass_json
@dataclasses.dataclass
class GetSegmentsResponse:
    segments_response: shared_segmentsresponse.SegmentsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentsResponse') }})
    
