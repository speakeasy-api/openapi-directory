import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessLog:
    r"""AccessLog
    Information about the <code>AccessLog</code> attribute.
    """
    
    enabled: bool = dataclasses.field()
    emit_interval: Optional[int] = dataclasses.field(default=None)
    s3_bucket_name: Optional[str] = dataclasses.field(default=None)
    s3_bucket_prefix: Optional[str] = dataclasses.field(default=None)
    
