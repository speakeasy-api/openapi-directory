import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidFileSystemException:
    r"""InvalidFileSystemException
    File system specified in export manifest is invalid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
