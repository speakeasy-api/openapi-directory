"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import receiptrule as shared_receiptrule
from typing import Optional


@dataclasses.dataclass
class DescribeReceiptRuleResponse:
    r"""Represents the details of a receipt rule."""
    
    rule: Optional[shared_receiptrule.ReceiptRule] = dataclasses.field(default=None)  
    