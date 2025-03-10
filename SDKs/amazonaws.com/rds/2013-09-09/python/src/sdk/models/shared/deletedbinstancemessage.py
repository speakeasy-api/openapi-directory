"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteDBInstanceMessage:
    
    db_instance_identifier: str = dataclasses.field()  
    final_db_snapshot_identifier: Optional[str] = dataclasses.field(default=None)  
    skip_final_snapshot: Optional[bool] = dataclasses.field(default=None)  
    