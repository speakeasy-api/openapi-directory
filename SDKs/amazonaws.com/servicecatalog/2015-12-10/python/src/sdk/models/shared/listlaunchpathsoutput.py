import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchpathsummary as shared_launchpathsummary


@dataclass_json
@dataclasses.dataclass
class ListLaunchPathsOutput:
    launch_path_summaries: Optional[list[shared_launchpathsummary.LaunchPathSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchPathSummaries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    
