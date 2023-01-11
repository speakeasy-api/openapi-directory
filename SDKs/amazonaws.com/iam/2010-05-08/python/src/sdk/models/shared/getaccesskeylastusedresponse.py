import dataclasses
from typing import Optional
from ..shared import accesskeylastused as shared_accesskeylastused


@dataclasses.dataclass
class GetAccessKeyLastUsedResponse:
    r"""GetAccessKeyLastUsedResponse
    Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action.
    """
    
    access_key_last_used: Optional[shared_accesskeylastused.AccessKeyLastUsed] = dataclasses.field(default=None)
    user_name: Optional[str] = dataclasses.field(default=None)
    
