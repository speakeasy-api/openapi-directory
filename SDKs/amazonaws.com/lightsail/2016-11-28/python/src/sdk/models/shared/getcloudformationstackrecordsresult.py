import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationstackrecord as shared_cloudformationstackrecord


@dataclass_json
@dataclasses.dataclass
class GetCloudFormationStackRecordsResult:
    cloud_formation_stack_records: Optional[list[shared_cloudformationstackrecord.CloudFormationStackRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFormationStackRecords') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
