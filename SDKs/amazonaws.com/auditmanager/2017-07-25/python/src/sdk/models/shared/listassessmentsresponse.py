import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentmetadataitem as shared_assessmentmetadataitem


@dataclass_json
@dataclasses.dataclass
class ListAssessmentsResponse:
    assessment_metadata: Optional[list[shared_assessmentmetadataitem.AssessmentMetadataItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentMetadata') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
