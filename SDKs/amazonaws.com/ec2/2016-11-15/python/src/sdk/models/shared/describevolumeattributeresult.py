import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVolumeAttributeResultAutoEnableIo:
    r"""DescribeVolumeAttributeResultAutoEnableIo
    The state of <code>autoEnableIO</code> attribute.
    """
    
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeVolumeAttributeResult:
    auto_enable_io: Optional[DescribeVolumeAttributeResultAutoEnableIo] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
