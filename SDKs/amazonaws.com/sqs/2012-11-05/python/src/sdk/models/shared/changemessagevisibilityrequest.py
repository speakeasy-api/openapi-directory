"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses


@dataclasses.dataclass
class ChangeMessageVisibilityRequest:
    
    queue_url: str = dataclasses.field()  
    receipt_handle: str = dataclasses.field()  
    visibility_timeout: int = dataclasses.field()  
    