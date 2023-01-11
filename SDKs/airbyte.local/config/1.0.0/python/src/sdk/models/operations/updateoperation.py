import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import operationupdate as shared_operationupdate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import operationread as shared_operationread


@dataclasses.dataclass
class UpdateOperationRequest:
    request: shared_operationupdate.OperationUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOperationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    operation_read: Optional[shared_operationread.OperationRead] = dataclasses.field(default=None)
    
