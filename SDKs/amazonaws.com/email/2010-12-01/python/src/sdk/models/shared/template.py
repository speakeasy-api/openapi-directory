import dataclasses
from typing import Optional


@dataclasses.dataclass
class Template:
    r"""Template
    The content of the email, composed of a subject line, an HTML part, and a text-only part.
    """
    
    template_name: str = dataclasses.field()
    html_part: Optional[str] = dataclasses.field(default=None)
    subject_part: Optional[str] = dataclasses.field(default=None)
    text_part: Optional[str] = dataclasses.field(default=None)
    
