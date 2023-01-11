import dataclasses
from typing import Optional
from ..shared import accesskeymetadata as shared_accesskeymetadata


@dataclasses.dataclass
class ListAccessKeysResponse:
    r"""ListAccessKeysResponse
    Contains the response to a successful <a>ListAccessKeys</a> request. 
    """
    
    access_key_metadata: list[shared_accesskeymetadata.AccessKeyMetadata] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
