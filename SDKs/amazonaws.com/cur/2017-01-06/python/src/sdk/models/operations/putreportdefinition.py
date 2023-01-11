import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putreportdefinitionrequest as shared_putreportdefinitionrequest

class PutReportDefinitionXAmzTargetEnum(str, Enum):
    AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_PUT_REPORT_DEFINITION = "AWSOrigamiServiceGatewayService.PutReportDefinition"


@dataclasses.dataclass
class PutReportDefinitionHeaders:
    x_amz_target: PutReportDefinitionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = dataclasses.field()
    request: shared_putreportdefinitionrequest.PutReportDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutReportDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    duplicate_report_name_exception: Optional[Any] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    put_report_definition_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    report_limit_reached_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
