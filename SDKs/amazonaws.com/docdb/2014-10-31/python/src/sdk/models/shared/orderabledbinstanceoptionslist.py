import dataclasses
from typing import Optional
from ..shared import availabilityzonelist as shared_availabilityzonelist


@dataclasses.dataclass
class OrderableDbInstanceOptionsList:
    r"""OrderableDbInstanceOptionsList
    The options that are available for an instance.
    """
    
    availability_zones: Optional[list[shared_availabilityzonelist.AvailabilityZoneList]] = dataclasses.field(default=None)
    db_instance_class: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    license_model: Optional[str] = dataclasses.field(default=None)
    vpc: Optional[bool] = dataclasses.field(default=None)
    
