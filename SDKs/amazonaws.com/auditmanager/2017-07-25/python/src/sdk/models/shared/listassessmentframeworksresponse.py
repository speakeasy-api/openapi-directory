import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentframeworkmetadata as shared_assessmentframeworkmetadata


@dataclass_json
@dataclasses.dataclass
class ListAssessmentFrameworksResponse:
    framework_metadata_list: Optional[list[shared_assessmentframeworkmetadata.AssessmentFrameworkMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameworkMetadataList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
