import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import url as shared_url


@dataclass_json
@dataclasses.dataclass
class GetAssessmentReportURLResponse:
    pre_signed_url: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preSignedUrl') }})
    
