import dataclasses
from typing import Optional
from ..shared import supportedplatformslist as shared_supportedplatformslist


@dataclasses.dataclass
class AvailabilityZoneList:
    r"""AvailabilityZoneList
    Describes an availability zone.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    supported_platforms: Optional[list[shared_supportedplatformslist.SupportedPlatformsList]] = dataclasses.field(default=None)
    
