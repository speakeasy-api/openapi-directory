import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MarkdownRenderRequestBodyModeEnum(str, Enum):
    MARKDOWN = "markdown"
    GFM = "gfm"


@dataclass_json
@dataclasses.dataclass
class MarkdownRenderRequestBody:
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    mode: Optional[MarkdownRenderRequestBodyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclasses.dataclass
class MarkdownRenderRequest:
    request: Optional[MarkdownRenderRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MarkdownRenderResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    markdown_render_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
