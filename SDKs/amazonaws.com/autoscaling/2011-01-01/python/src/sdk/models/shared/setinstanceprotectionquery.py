"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses


@dataclasses.dataclass
class SetInstanceProtectionQuery:
    
    auto_scaling_group_name: str = dataclasses.field()  
    instance_ids: list[str] = dataclasses.field()  
    protected_from_scale_in: bool = dataclasses.field()  
    