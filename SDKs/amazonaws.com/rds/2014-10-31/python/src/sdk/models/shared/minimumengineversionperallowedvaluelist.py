import dataclasses
from typing import Optional


@dataclasses.dataclass
class MinimumEngineVersionPerAllowedValueList:
    r"""MinimumEngineVersionPerAllowedValueList
    The minimum DB engine version required for each corresponding allowed value for an option setting.
    """
    
    allowed_value: Optional[str] = dataclasses.field(default=None)
    minimum_engine_version: Optional[str] = dataclasses.field(default=None)
    
