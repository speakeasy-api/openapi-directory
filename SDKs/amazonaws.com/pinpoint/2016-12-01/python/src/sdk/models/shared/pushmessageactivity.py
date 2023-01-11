import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeypushmessage as shared_journeypushmessage


@dataclass_json
@dataclasses.dataclass
class PushMessageActivity:
    r"""PushMessageActivity
    Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
    """
    
    message_config: Optional[shared_journeypushmessage.JourneyPushMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfig') }})
    next_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateVersion') }})
    
