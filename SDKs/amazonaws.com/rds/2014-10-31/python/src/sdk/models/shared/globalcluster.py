"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import failoverstate as shared_failoverstate
from ..shared import globalclustermemberlist as shared_globalclustermemberlist
from typing import Optional


@dataclasses.dataclass
class GlobalCluster:
    r"""A data type representing an Aurora global database."""
    
    database_name: Optional[str] = dataclasses.field(default=None)  
    deletion_protection: Optional[bool] = dataclasses.field(default=None)  
    engine: Optional[str] = dataclasses.field(default=None)  
    engine_version: Optional[str] = dataclasses.field(default=None)  
    failover_state: Optional[shared_failoverstate.FailoverState] = dataclasses.field(default=None)  
    global_cluster_arn: Optional[str] = dataclasses.field(default=None)  
    global_cluster_identifier: Optional[str] = dataclasses.field(default=None)  
    global_cluster_members: Optional[list[shared_globalclustermemberlist.GlobalClusterMemberList]] = dataclasses.field(default=None)  
    global_cluster_resource_id: Optional[str] = dataclasses.field(default=None)  
    status: Optional[str] = dataclasses.field(default=None)  
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)  
    