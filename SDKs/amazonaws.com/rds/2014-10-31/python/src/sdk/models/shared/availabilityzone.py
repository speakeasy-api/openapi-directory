import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    <p>Contains Availability Zone information.</p> <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code> data type.</p>
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
