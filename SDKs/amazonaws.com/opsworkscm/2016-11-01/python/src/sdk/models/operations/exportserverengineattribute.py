import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import exportserverengineattributerequest as shared_exportserverengineattributerequest
from ..shared import exportserverengineattributeresponse as shared_exportserverengineattributeresponse

class ExportServerEngineAttributeXAmzTargetEnum(str, Enum):
    OPS_WORKS_CM_V2016_11_01_EXPORT_SERVER_ENGINE_ATTRIBUTE = "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute"


@dataclasses.dataclass
class ExportServerEngineAttributeHeaders:
    x_amz_target: ExportServerEngineAttributeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportServerEngineAttributeRequest:
    headers: ExportServerEngineAttributeHeaders = dataclasses.field()
    request: shared_exportserverengineattributerequest.ExportServerEngineAttributeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportServerEngineAttributeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_server_engine_attribute_response: Optional[shared_exportserverengineattributeresponse.ExportServerEngineAttributeResponse] = dataclasses.field(default=None)
    invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
