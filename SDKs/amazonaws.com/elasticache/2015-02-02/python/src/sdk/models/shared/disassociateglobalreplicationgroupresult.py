"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import globalreplicationgroup as shared_globalreplicationgroup
from typing import Optional


@dataclasses.dataclass
class DisassociateGlobalReplicationGroupResult:
    r"""Success"""
    
    global_replication_group: Optional[shared_globalreplicationgroup.GlobalReplicationGroup] = dataclasses.field(default=None)
    r"""<p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>"""  
    