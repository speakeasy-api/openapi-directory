"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class EnableAddressTransferRequest:
    
    allocation_id: str = dataclasses.field()  
    transfer_account_id: str = dataclasses.field()  
    dry_run: Optional[bool] = dataclasses.field(default=None)  
    