import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedTimezonesList:
    r"""SupportedTimezonesList
    A time zone associated with a <a>DBInstance</a>.
    """
    
    timezone_name: Optional[str] = dataclasses.field(default=None)
    
