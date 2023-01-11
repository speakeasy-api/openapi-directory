import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listschemaextensionsrequest as shared_listschemaextensionsrequest
from ..shared import listschemaextensionsresult as shared_listschemaextensionsresult

class ListSchemaExtensionsXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_LIST_SCHEMA_EXTENSIONS = "DirectoryService_20150416.ListSchemaExtensions"


@dataclasses.dataclass
class ListSchemaExtensionsHeaders:
    x_amz_target: ListSchemaExtensionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSchemaExtensionsRequest:
    headers: ListSchemaExtensionsHeaders = dataclasses.field()
    request: shared_listschemaextensionsrequest.ListSchemaExtensionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListSchemaExtensionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    entity_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_schema_extensions_result: Optional[shared_listschemaextensionsresult.ListSchemaExtensionsResult] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    
