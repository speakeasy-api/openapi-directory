import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyCookieNamesInWhiteList:
    r"""TooManyCookieNamesInWhiteList
    Your request contains more cookie names in the whitelist than are allowed per cache behavior.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
