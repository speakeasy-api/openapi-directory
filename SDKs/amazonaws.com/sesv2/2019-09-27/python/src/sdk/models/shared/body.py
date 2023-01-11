import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import content as shared_content


@dataclass_json
@dataclasses.dataclass
class Body:
    r"""Body
    Represents the body of the email message.
    """
    
    html: Optional[shared_content.Content] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Html') }})
    text: Optional[shared_content.Content] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
