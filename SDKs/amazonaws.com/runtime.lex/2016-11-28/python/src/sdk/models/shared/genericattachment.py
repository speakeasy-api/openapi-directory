import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import button as shared_button


@dataclass_json
@dataclasses.dataclass
class GenericAttachment:
    r"""GenericAttachment
    Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
    """
    
    attachment_link_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentLinkUrl') }})
    buttons: Optional[list[shared_button.Button]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    sub_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTitle') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
