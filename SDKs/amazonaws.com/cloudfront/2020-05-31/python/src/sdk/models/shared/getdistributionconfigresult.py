"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import distributionconfig as shared_distributionconfig
from typing import Optional


@dataclasses.dataclass
class GetDistributionConfigResult:
    r"""The returned result of the corresponding request."""
    
    distribution_config: Optional[shared_distributionconfig.DistributionConfig] = dataclasses.field(default=None)  
    