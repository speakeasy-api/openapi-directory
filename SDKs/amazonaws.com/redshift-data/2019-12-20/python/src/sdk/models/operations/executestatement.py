import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import executestatementinput as shared_executestatementinput
from ..shared import executestatementoutput as shared_executestatementoutput

class ExecuteStatementXAmzTargetEnum(str, Enum):
    REDSHIFT_DATA_EXECUTE_STATEMENT = "RedshiftData.ExecuteStatement"


@dataclasses.dataclass
class ExecuteStatementHeaders:
    x_amz_target: ExecuteStatementXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExecuteStatementRequest:
    headers: ExecuteStatementHeaders = dataclasses.field()
    request: shared_executestatementinput.ExecuteStatementInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteStatementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    active_statements_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    execute_statement_exception: Optional[Any] = dataclasses.field(default=None)
    execute_statement_output: Optional[shared_executestatementoutput.ExecuteStatementOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
