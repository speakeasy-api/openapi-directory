import dataclasses
from typing import Optional
from enum import Enum
from ..shared import partitioninstancetype_enum as shared_partitioninstancetype_enum


@dataclasses.dataclass
class ScalingParameters:
    r"""ScalingParameters
    The desired instance type and desired number of replicas of each index partition.
    """
    
    desired_instance_type: Optional[shared_partitioninstancetype_enum.PartitionInstanceTypeEnum] = dataclasses.field(default=None)
    desired_partition_count: Optional[int] = dataclasses.field(default=None)
    desired_replication_count: Optional[int] = dataclasses.field(default=None)
    
