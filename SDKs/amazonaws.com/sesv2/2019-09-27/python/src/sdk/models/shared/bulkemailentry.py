import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destination as shared_destination
from ..shared import replacementemailcontent as shared_replacementemailcontent
from ..shared import messagetag as shared_messagetag


@dataclass_json
@dataclasses.dataclass
class BulkEmailEntry:
    destination: shared_destination.Destination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    replacement_email_content: Optional[shared_replacementemailcontent.ReplacementEmailContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementEmailContent') }})
    replacement_tags: Optional[list[shared_messagetag.MessageTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementTags') }})
    
