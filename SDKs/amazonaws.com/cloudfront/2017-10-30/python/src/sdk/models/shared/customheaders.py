"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import origincustomheaderslist as shared_origincustomheaderslist
from typing import Optional


@dataclasses.dataclass
class CustomHeaders:
    r"""A complex type that contains the list of Custom Headers for each origin."""
    
    quantity: int = dataclasses.field()  
    items: Optional[list[shared_origincustomheaderslist.OriginCustomHeadersList]] = dataclasses.field(default=None)  
    