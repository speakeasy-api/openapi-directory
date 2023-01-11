import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buttonaction_enum as shared_buttonaction_enum


@dataclass_json
@dataclasses.dataclass
class DefaultButtonConfiguration:
    r"""DefaultButtonConfiguration
    Default button configuration.
    """
    
    button_action: shared_buttonaction_enum.ButtonActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ButtonAction') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    background_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackgroundColor') }})
    border_radius: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorderRadius') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    text_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
