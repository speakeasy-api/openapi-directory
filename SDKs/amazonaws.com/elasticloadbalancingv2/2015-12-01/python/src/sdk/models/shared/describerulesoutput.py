"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import rule as shared_rule
from typing import Optional


@dataclasses.dataclass
class DescribeRulesOutput:
    r"""Success"""
    
    next_marker: Optional[str] = dataclasses.field(default=None)  
    rules: Optional[list[shared_rule.Rule]] = dataclasses.field(default=None)  
    