import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstallationMediaFailureCause:
    r"""InstallationMediaFailureCause
    Contains the cause of an installation media failure. Installation media is used for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
