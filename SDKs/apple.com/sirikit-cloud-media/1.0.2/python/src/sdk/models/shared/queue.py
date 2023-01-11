import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import content as shared_content
from ..shared import playmediacontrol as shared_playmediacontrol
from ..shared import queueplaypointer as shared_queueplaypointer


@dataclass_json
@dataclasses.dataclass
class Queue:
    content: list[shared_content.Content] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    content_items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentItemsCount') }})
    controls: Optional[dict[str, shared_playmediacontrol.PlayMediaControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    insert_pointer: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertPointer') }})
    next_content_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextContentUrl') }})
    play_pointer: Optional[shared_queueplaypointer.QueuePlayPointer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playPointer') }})
    preroll_seconds: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerollSeconds') }})
    previous_content_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousContentUrl') }})
    skips_remaining: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipsRemaining') }})
    
