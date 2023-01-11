import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putretentionconfigurationrequest as shared_putretentionconfigurationrequest
from ..shared import putretentionconfigurationresponse as shared_putretentionconfigurationresponse

class PutRetentionConfigurationXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_RETENTION_CONFIGURATION = "StarlingDoveService.PutRetentionConfiguration"


@dataclasses.dataclass
class PutRetentionConfigurationHeaders:
    x_amz_target: PutRetentionConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRetentionConfigurationRequest:
    headers: PutRetentionConfigurationHeaders = dataclasses.field()
    request: shared_putretentionconfigurationrequest.PutRetentionConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRetentionConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    max_number_of_retention_configurations_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    put_retention_configuration_response: Optional[shared_putretentionconfigurationresponse.PutRetentionConfigurationResponse] = dataclasses.field(default=None)
    
