"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses


@dataclasses.dataclass
class UntagInstanceProfileRequest:
    
    instance_profile_name: str = dataclasses.field()  
    tag_keys: list[str] = dataclasses.field()  
    