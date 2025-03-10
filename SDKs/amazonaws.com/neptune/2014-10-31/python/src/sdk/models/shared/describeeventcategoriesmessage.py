"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import filterlist as shared_filterlist
from typing import Optional


@dataclasses.dataclass
class DescribeEventCategoriesMessage:
    
    filters: Optional[list[shared_filterlist.FilterList]] = dataclasses.field(default=None)  
    source_type: Optional[str] = dataclasses.field(default=None)  
    