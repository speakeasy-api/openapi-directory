import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagebodyconfig as shared_inappmessagebodyconfig
from ..shared import inappmessageheaderconfig as shared_inappmessageheaderconfig
from ..shared import inappmessagebutton as shared_inappmessagebutton


@dataclass_json
@dataclasses.dataclass
class InAppMessageContent:
    r"""InAppMessageContent
    The configuration for the message content.
    """
    
    background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackgroundColor') }})
    body_config: Optional[shared_inappmessagebodyconfig.InAppMessageBodyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyConfig') }})
    header_config: Optional[shared_inappmessageheaderconfig.InAppMessageHeaderConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderConfig') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    primary_btn: Optional[shared_inappmessagebutton.InAppMessageButton] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryBtn') }})
    secondary_btn: Optional[shared_inappmessagebutton.InAppMessageButton] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryBtn') }})
    
