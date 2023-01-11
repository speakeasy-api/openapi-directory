import dataclasses
from typing import Optional
from ..shared import operatorconfiguration as shared_operatorconfiguration
from ..shared import checkoperationread as shared_checkoperationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class CheckOperationRequest:
    request: shared_operatorconfiguration.OperatorConfiguration = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckOperationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_operation_read: Optional[shared_checkoperationread.CheckOperationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
