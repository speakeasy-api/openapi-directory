import dataclasses
from typing import Optional
from ..shared import getlastblocknumber as shared_getlastblocknumber


@dataclasses.dataclass
class GetLastBlockNumberHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLastBlockNumberRequest:
    headers: GetLastBlockNumberHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetLastBlockNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_last_block_number: Optional[shared_getlastblocknumber.GetLastBlockNumber] = dataclasses.field(default=None)
    
