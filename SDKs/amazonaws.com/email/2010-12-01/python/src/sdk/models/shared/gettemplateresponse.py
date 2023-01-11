import dataclasses
from typing import Optional
from ..shared import template as shared_template


@dataclasses.dataclass
class GetTemplateResponse:
    template: Optional[shared_template.Template] = dataclasses.field(default=None)
    
