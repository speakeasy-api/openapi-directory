import dataclasses
from typing import Optional


@dataclasses.dataclass
class S3Location:
    r"""S3Location
    The bucket and key of an item stored in Amazon S3.
    """
    
    s3_bucket: Optional[str] = dataclasses.field(default=None)
    s3_key: Optional[str] = dataclasses.field(default=None)
    
