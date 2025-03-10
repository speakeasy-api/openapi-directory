"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import distributionlist as shared_distributionlist
from typing import Optional


@dataclasses.dataclass
class ListDistributionsResult:
    r"""The returned result of the corresponding request."""
    
    distribution_list: Optional[shared_distributionlist.DistributionList] = dataclasses.field(default=None)  
    