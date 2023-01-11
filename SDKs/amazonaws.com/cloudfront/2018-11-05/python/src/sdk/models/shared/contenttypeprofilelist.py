import dataclasses
from typing import Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum


@dataclasses.dataclass
class ContentTypeProfileList:
    r"""ContentTypeProfileList
    A field-level encryption content type profile. 
    """
    
    content_type: str = dataclasses.field()
    format: shared_format_enum.FormatEnum = dataclasses.field()
    profile_id: Optional[str] = dataclasses.field(default=None)
    
