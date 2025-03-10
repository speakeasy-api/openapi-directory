"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import cancelstatementrequest as shared_cancelstatementrequest
from ..shared import cancelstatementresponse as shared_cancelstatementresponse
from enum import Enum
from typing import Any, Optional

class CancelStatementXAmzTargetEnum(str, Enum):
    REDSHIFT_DATA_CANCEL_STATEMENT = 'RedshiftData.CancelStatement'


@dataclasses.dataclass
class CancelStatementRequest:
    
    cancel_statement_request: shared_cancelstatementrequest.CancelStatementRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: CancelStatementXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CancelStatementResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    cancel_statement_response: Optional[shared_cancelstatementresponse.CancelStatementResponse] = dataclasses.field(default=None)
    r"""Success"""  
    database_connection_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DatabaseConnectionException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    