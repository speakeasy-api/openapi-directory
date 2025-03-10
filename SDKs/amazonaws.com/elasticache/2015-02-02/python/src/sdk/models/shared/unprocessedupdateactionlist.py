"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class UnprocessedUpdateActionList:
    r"""Update action that has failed to be processed for the corresponding apply/stop request"""
    
    cache_cluster_id: Optional[str] = dataclasses.field(default=None)  
    error_message: Optional[str] = dataclasses.field(default=None)  
    error_type: Optional[str] = dataclasses.field(default=None)  
    replication_group_id: Optional[str] = dataclasses.field(default=None)  
    service_update_name: Optional[str] = dataclasses.field(default=None)  
    