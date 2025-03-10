"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import reservednode as shared_reservednode
from ..shared import reservednodeoffering as shared_reservednodeoffering
from typing import Optional


@dataclasses.dataclass
class ReservedNodeConfigurationOptionList:
    r"""Details for a reserved-node exchange. Examples include the node type for a reserved node, the price for a node, the node's state, and other details."""
    
    source_reserved_node: Optional[shared_reservednode.ReservedNode] = dataclasses.field(default=None)
    r"""Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings."""  
    target_reserved_node_count: Optional[int] = dataclasses.field(default=None)  
    target_reserved_node_offering: Optional[shared_reservednodeoffering.ReservedNodeOffering] = dataclasses.field(default=None)
    r"""Describes a reserved node offering."""  
    