"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import cachebehaviorlist as shared_cachebehaviorlist
from typing import Optional


@dataclasses.dataclass
class CacheBehaviors:
    r"""A complex type that contains zero or more <code>CacheBehavior</code> elements."""
    
    quantity: int = dataclasses.field()  
    items: Optional[list[shared_cachebehaviorlist.CacheBehaviorList]] = dataclasses.field(default=None)  
    