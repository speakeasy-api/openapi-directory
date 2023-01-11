import dataclasses
from typing import Optional


@dataclasses.dataclass
class MarkdownRenderRawRequests:
    string: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    string1: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/x-markdown' }})
    

@dataclasses.dataclass
class MarkdownRenderRawRequest:
    request: Optional[MarkdownRenderRawRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class MarkdownRenderRawResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    markdown_render_raw_200_text_html_string: Optional[str] = dataclasses.field(default=None)
    
