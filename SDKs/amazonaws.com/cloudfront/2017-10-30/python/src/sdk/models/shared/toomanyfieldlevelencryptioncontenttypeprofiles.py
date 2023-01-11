import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionContentTypeProfiles:
    r"""TooManyFieldLevelEncryptionContentTypeProfiles
    The maximum number of content type profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
