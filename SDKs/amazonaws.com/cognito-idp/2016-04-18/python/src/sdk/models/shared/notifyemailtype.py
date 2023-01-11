import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NotifyEmailType:
    r"""NotifyEmailType
    The notify email type.
    """
    
    subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    html_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HtmlBody') }})
    text_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextBody') }})
    
