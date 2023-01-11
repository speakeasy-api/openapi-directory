import dataclasses
from typing import Optional
from ..shared import getblockrequest as shared_getblockrequest
from ..shared import getblock as shared_getblock


@dataclasses.dataclass
class GetBlockHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlockRequest:
    headers: GetBlockHeaders = dataclasses.field()
    request: shared_getblockrequest.GetBlockRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_block: Optional[shared_getblock.GetBlock] = dataclasses.field(default=None)
    
