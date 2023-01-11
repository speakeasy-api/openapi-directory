import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionConfigs:
    r"""TooManyFieldLevelEncryptionConfigs
    The maximum number of configurations for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
