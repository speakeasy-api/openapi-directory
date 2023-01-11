import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailcontent as shared_emailcontent
from ..shared import emailrecipients as shared_emailrecipients


@dataclass_json
@dataclasses.dataclass
class EmailConfiguration:
    r"""EmailConfiguration
    Contains the configuration information of email notifications.
    """
    
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    recipients: shared_emailrecipients.EmailRecipients = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    content: Optional[shared_emailcontent.EmailContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    
