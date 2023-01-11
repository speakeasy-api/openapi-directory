import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putquerydefinitionrequest as shared_putquerydefinitionrequest
from ..shared import putquerydefinitionresponse as shared_putquerydefinitionresponse

class PutQueryDefinitionXAmzTargetEnum(str, Enum):
    LOGS_20140328_PUT_QUERY_DEFINITION = "Logs_20140328.PutQueryDefinition"


@dataclasses.dataclass
class PutQueryDefinitionHeaders:
    x_amz_target: PutQueryDefinitionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutQueryDefinitionRequest:
    headers: PutQueryDefinitionHeaders = dataclasses.field()
    request: shared_putquerydefinitionrequest.PutQueryDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutQueryDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    put_query_definition_response: Optional[shared_putquerydefinitionresponse.PutQueryDefinitionResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
