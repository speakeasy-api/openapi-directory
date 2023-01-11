import dataclasses
from typing import Optional
from ..shared import operationidrequestbody as shared_operationidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import operationread as shared_operationread


@dataclasses.dataclass
class GetOperationRequest:
    request: shared_operationidrequestbody.OperationIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOperationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    operation_read: Optional[shared_operationread.OperationRead] = dataclasses.field(default=None)
    
