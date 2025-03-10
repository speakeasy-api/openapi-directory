"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import tag as shared_tag
from ..shared import user as shared_user
from datetime import datetime
from typing import Optional


@dataclasses.dataclass
class VirtualMFADevice:
    r"""Contains information about a virtual MFA device."""
    
    serial_number: str = dataclasses.field()  
    base32_string_seed: Optional[str] = dataclasses.field(default=None)  
    enable_date: Optional[datetime] = dataclasses.field(default=None)  
    qr_code_png: Optional[str] = dataclasses.field(default=None)  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)  
    user: Optional[shared_user.User] = dataclasses.field(default=None)  
    