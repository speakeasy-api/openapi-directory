"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionGroupMembershipList:
    
    option_group_name: Optional[str] = dataclasses.field(default=None)  
    status: Optional[str] = dataclasses.field(default=None)  
    