import dataclasses
from typing import Optional
from ..shared import availabilityzonelist as shared_availabilityzonelist


@dataclasses.dataclass
class OrderableClusterOptionsList:
    r"""OrderableClusterOptionsList
    Describes an orderable cluster option.
    """
    
    availability_zones: Optional[list[shared_availabilityzonelist.AvailabilityZoneList]] = dataclasses.field(default=None)
    cluster_type: Optional[str] = dataclasses.field(default=None)
    cluster_version: Optional[str] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    
