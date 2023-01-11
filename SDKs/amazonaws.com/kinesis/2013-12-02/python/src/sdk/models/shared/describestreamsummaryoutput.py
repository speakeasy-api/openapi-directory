import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamdescriptionsummary as shared_streamdescriptionsummary


@dataclass_json
@dataclasses.dataclass
class DescribeStreamSummaryOutput:
    stream_description_summary: shared_streamdescriptionsummary.StreamDescriptionSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescriptionSummary') }})
    
