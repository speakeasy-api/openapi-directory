"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingParameter:
    r"""The request must contain the specified missing parameter."""
    
    box_usage: Optional[float] = dataclasses.field(default=None)  
    