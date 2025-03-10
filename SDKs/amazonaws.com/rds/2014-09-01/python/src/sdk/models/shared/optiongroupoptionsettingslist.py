"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionGroupOptionSettingsList:
    
    allowed_values: Optional[str] = dataclasses.field(default=None)  
    apply_type: Optional[str] = dataclasses.field(default=None)  
    default_value: Optional[str] = dataclasses.field(default=None)  
    is_modifiable: Optional[bool] = dataclasses.field(default=None)  
    setting_description: Optional[str] = dataclasses.field(default=None)  
    setting_name: Optional[str] = dataclasses.field(default=None)  
    