import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteremediationconfigurationrequest as shared_deleteremediationconfigurationrequest

class DeleteRemediationConfigurationXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_REMEDIATION_CONFIGURATION = "StarlingDoveService.DeleteRemediationConfiguration"


@dataclasses.dataclass
class DeleteRemediationConfigurationHeaders:
    x_amz_target: DeleteRemediationConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRemediationConfigurationRequest:
    headers: DeleteRemediationConfigurationHeaders = dataclasses.field()
    request: shared_deleteremediationconfigurationrequest.DeleteRemediationConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRemediationConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_remediation_configuration_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_remediation_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    remediation_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    
