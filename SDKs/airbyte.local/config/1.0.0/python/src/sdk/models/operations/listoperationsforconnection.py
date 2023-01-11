import dataclasses
from typing import Optional
from ..shared import connectionidrequestbody as shared_connectionidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import operationreadlist as shared_operationreadlist


@dataclasses.dataclass
class ListOperationsForConnectionRequest:
    request: shared_connectionidrequestbody.ConnectionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListOperationsForConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    operation_read_list: Optional[shared_operationreadlist.OperationReadList] = dataclasses.field(default=None)
    
