"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import filterlist as shared_filterlist
from typing import Optional


@dataclasses.dataclass
class DescribeEventSubscriptionsMessage:
    
    filters: Optional[list[shared_filterlist.FilterList]] = dataclasses.field(default=None)  
    marker: Optional[str] = dataclasses.field(default=None)  
    max_records: Optional[int] = dataclasses.field(default=None)  
    subscription_name: Optional[str] = dataclasses.field(default=None)  
    