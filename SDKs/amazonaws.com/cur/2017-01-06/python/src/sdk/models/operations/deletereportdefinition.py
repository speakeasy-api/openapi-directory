import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletereportdefinitionrequest as shared_deletereportdefinitionrequest
from ..shared import deletereportdefinitionresponse as shared_deletereportdefinitionresponse

class DeleteReportDefinitionXAmzTargetEnum(str, Enum):
    AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION = "AWSOrigamiServiceGatewayService.DeleteReportDefinition"


@dataclasses.dataclass
class DeleteReportDefinitionHeaders:
    x_amz_target: DeleteReportDefinitionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReportDefinitionRequest:
    headers: DeleteReportDefinitionHeaders = dataclasses.field()
    request: shared_deletereportdefinitionrequest.DeleteReportDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteReportDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_report_definition_response: Optional[shared_deletereportdefinitionresponse.DeleteReportDefinitionResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
