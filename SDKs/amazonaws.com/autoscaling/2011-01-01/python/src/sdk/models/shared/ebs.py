import dataclasses
from typing import Optional


@dataclasses.dataclass
class Ebs:
    r"""Ebs
    Describes information used to set up an Amazon EBS volume specified in a block device mapping.
    """
    
    delete_on_termination: Optional[bool] = dataclasses.field(default=None)
    encrypted: Optional[bool] = dataclasses.field(default=None)
    iops: Optional[int] = dataclasses.field(default=None)
    snapshot_id: Optional[str] = dataclasses.field(default=None)
    throughput: Optional[int] = dataclasses.field(default=None)
    volume_size: Optional[int] = dataclasses.field(default=None)
    volume_type: Optional[str] = dataclasses.field(default=None)
    
