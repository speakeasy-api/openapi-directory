"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import availabilityzonelist as shared_availabilityzonelist
from typing import Optional


@dataclasses.dataclass
class OrderableClusterOptionsList:
    r"""Describes an orderable cluster option."""
    
    availability_zones: Optional[list[shared_availabilityzonelist.AvailabilityZoneList]] = dataclasses.field(default=None)  
    cluster_type: Optional[str] = dataclasses.field(default=None)  
    cluster_version: Optional[str] = dataclasses.field(default=None)  
    node_type: Optional[str] = dataclasses.field(default=None)  
    