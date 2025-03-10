"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedOperationList:
    r"""Describes the operations that are allowed on a maintenance track."""
    
    operation_name: Optional[str] = dataclasses.field(default=None)  
    