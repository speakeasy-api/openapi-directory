import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicelogevent as shared_containerservicelogevent


@dataclass_json
@dataclasses.dataclass
class GetContainerLogResult:
    log_events: Optional[list[shared_containerservicelogevent.ContainerServiceLogEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEvents') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
