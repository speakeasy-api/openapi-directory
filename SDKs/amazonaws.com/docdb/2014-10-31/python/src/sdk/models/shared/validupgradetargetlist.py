import dataclasses
from typing import Optional


@dataclasses.dataclass
class ValidUpgradeTargetList:
    r"""ValidUpgradeTargetList
    The version of the database engine that an instance can be upgraded to.
    """
    
    auto_upgrade: Optional[bool] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    is_major_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    
