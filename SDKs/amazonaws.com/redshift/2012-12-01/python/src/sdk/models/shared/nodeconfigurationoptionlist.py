import dataclasses
from typing import Optional
from enum import Enum
from ..shared import mode_enum as shared_mode_enum


@dataclasses.dataclass
class NodeConfigurationOptionList:
    r"""NodeConfigurationOptionList
    A list of node configurations.
    """
    
    estimated_disk_utilization_percent: Optional[float] = dataclasses.field(default=None)
    mode: Optional[shared_mode_enum.ModeEnum] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    number_of_nodes: Optional[int] = dataclasses.field(default=None)
    
