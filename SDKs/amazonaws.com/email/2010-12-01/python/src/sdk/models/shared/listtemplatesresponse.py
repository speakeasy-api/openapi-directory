import dataclasses
from typing import Optional
from ..shared import templatemetadata as shared_templatemetadata


@dataclasses.dataclass
class ListTemplatesResponse:
    next_token: Optional[str] = dataclasses.field(default=None)
    templates_metadata: Optional[list[shared_templatemetadata.TemplateMetadata]] = dataclasses.field(default=None)
    
