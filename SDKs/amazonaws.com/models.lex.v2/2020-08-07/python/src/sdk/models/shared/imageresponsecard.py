import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import button as shared_button


@dataclass_json
@dataclasses.dataclass
class ImageResponseCard:
    r"""ImageResponseCard
    <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
    """
    
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    buttons: Optional[list[shared_button.Button]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    subtitle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    
