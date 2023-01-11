import dataclasses
from typing import Optional
from ..shared import ebs as shared_ebs


@dataclasses.dataclass
class BlockDeviceMapping:
    r"""BlockDeviceMapping
    Describes a block device mapping.
    """
    
    device_name: str = dataclasses.field()
    ebs: Optional[shared_ebs.Ebs] = dataclasses.field(default=None)
    no_device: Optional[bool] = dataclasses.field(default=None)
    virtual_name: Optional[str] = dataclasses.field(default=None)
    
