"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import authentication as shared_authentication
from typing import Optional


@dataclasses.dataclass
class User:
    r"""Success"""
    
    access_string: Optional[str] = dataclasses.field(default=None)  
    arn: Optional[str] = dataclasses.field(default=None)  
    authentication: Optional[shared_authentication.Authentication] = dataclasses.field(default=None)  
    engine: Optional[str] = dataclasses.field(default=None)  
    minimum_engine_version: Optional[str] = dataclasses.field(default=None)  
    status: Optional[str] = dataclasses.field(default=None)  
    user_group_ids: Optional[list[str]] = dataclasses.field(default=None)  
    user_id: Optional[str] = dataclasses.field(default=None)  
    user_name: Optional[str] = dataclasses.field(default=None)  
    