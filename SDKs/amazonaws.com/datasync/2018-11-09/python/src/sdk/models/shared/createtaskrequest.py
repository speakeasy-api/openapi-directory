import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterrule as shared_filterrule
from ..shared import options as shared_options
from ..shared import taskschedule as shared_taskschedule
from ..shared import taglistentry as shared_taglistentry


@dataclass_json
@dataclasses.dataclass
class CreateTaskRequest:
    r"""CreateTaskRequest
    CreateTaskRequest
    """
    
    destination_location_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationLocationArn') }})
    source_location_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLocationArn') }})
    cloud_watch_log_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupArn') }})
    excludes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    schedule: Optional[shared_taskschedule.TaskSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    tags: Optional[list[shared_taglistentry.TagListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
