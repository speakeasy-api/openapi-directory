import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putremediationconfigurationsrequest as shared_putremediationconfigurationsrequest
from ..shared import putremediationconfigurationsresponse as shared_putremediationconfigurationsresponse

class PutRemediationConfigurationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_REMEDIATION_CONFIGURATIONS = "StarlingDoveService.PutRemediationConfigurations"


@dataclasses.dataclass
class PutRemediationConfigurationsHeaders:
    x_amz_target: PutRemediationConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRemediationConfigurationsRequest:
    headers: PutRemediationConfigurationsHeaders = dataclasses.field()
    request: shared_putremediationconfigurationsrequest.PutRemediationConfigurationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRemediationConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    put_remediation_configurations_response: Optional[shared_putremediationconfigurationsresponse.PutRemediationConfigurationsResponse] = dataclasses.field(default=None)
    
