import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateStorageLocationResultMessage:
    r"""CreateStorageLocationResultMessage
    Results of a <a>CreateStorageLocationResult</a> call.
    """
    
    s3_bucket: Optional[str] = dataclasses.field(default=None)
    
