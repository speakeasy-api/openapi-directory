"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstanceSpecification:
    r"""The instance details to specify which volumes should be snapshotted."""
    
    instance_id: str = dataclasses.field()  
    exclude_boot_volume: Optional[bool] = dataclasses.field(default=None)  
    exclude_data_volume_ids: Optional[list[str]] = dataclasses.field(default=None)  
    