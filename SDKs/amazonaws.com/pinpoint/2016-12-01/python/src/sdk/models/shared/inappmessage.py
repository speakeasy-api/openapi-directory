import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagecontent as shared_inappmessagecontent
from ..shared import layout_enum as shared_layout_enum


@dataclass_json
@dataclasses.dataclass
class InAppMessage:
    r"""InAppMessage
    Provides all fields required for building an in-app message.
    """
    
    content: Optional[list[shared_inappmessagecontent.InAppMessageContent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    custom_config: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomConfig') }})
    layout: Optional[shared_layout_enum.LayoutEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layout') }})
    
