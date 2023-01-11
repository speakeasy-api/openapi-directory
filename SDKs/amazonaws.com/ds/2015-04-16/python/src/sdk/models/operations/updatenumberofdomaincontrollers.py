import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatenumberofdomaincontrollersrequest as shared_updatenumberofdomaincontrollersrequest

class UpdateNumberOfDomainControllersXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS = "DirectoryService_20150416.UpdateNumberOfDomainControllers"


@dataclasses.dataclass
class UpdateNumberOfDomainControllersHeaders:
    x_amz_target: UpdateNumberOfDomainControllersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNumberOfDomainControllersRequest:
    headers: UpdateNumberOfDomainControllersHeaders = dataclasses.field()
    request: shared_updatenumberofdomaincontrollersrequest.UpdateNumberOfDomainControllersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNumberOfDomainControllersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    directory_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    domain_controller_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    entity_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    update_number_of_domain_controllers_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
