"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class DBInstanceStatusInfoList:
    
    message: Optional[str] = dataclasses.field(default=None)  
    normal: Optional[bool] = dataclasses.field(default=None)  
    status: Optional[str] = dataclasses.field(default=None)  
    status_type: Optional[str] = dataclasses.field(default=None)  
    