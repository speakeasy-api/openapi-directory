import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateArchiveRequest:
    archive_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveName') }})
    event_source_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventPattern') }})
    retention_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionDays') }})
    
