import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeyemailmessage as shared_journeyemailmessage


@dataclass_json
@dataclasses.dataclass
class EmailMessageActivity:
    r"""EmailMessageActivity
    Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
    """
    
    message_config: Optional[shared_journeyemailmessage.JourneyEmailMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfig') }})
    next_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateVersion') }})
    
