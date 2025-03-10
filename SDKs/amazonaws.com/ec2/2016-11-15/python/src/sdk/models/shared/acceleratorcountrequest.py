"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class AcceleratorCountRequest:
    r"""The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance. To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>."""
    
    max: Optional[int] = dataclasses.field(default=None)  
    min: Optional[int] = dataclasses.field(default=None)  
    