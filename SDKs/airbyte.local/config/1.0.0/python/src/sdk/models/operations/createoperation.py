import dataclasses
from typing import Optional
from ..shared import operationcreate as shared_operationcreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import operationread as shared_operationread


@dataclasses.dataclass
class CreateOperationRequest:
    request: shared_operationcreate.OperationCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOperationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    operation_read: Optional[shared_operationread.OperationRead] = dataclasses.field(default=None)
    
