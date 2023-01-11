import dataclasses
from typing import Optional


@dataclasses.dataclass
class Artifact:
    r"""Artifact
    A discrete item that contains the description and URL of an artifact (such as a PDF).
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
