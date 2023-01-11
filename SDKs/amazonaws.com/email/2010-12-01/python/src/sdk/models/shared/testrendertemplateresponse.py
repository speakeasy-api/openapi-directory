import dataclasses
from typing import Optional


@dataclasses.dataclass
class TestRenderTemplateResponse:
    rendered_template: Optional[str] = dataclasses.field(default=None)
    
