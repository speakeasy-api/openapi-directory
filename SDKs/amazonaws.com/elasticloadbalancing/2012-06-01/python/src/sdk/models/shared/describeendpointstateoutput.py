import dataclasses
from typing import Optional
from ..shared import instancestate as shared_instancestate


@dataclasses.dataclass
class DescribeEndPointStateOutput:
    r"""DescribeEndPointStateOutput
    Contains the output for DescribeInstanceHealth.
    """
    
    instance_states: Optional[list[shared_instancestate.InstanceState]] = dataclasses.field(default=None)
    
