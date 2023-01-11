import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AssociateDeviceWithPlacementPathParams:
    device_template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceTemplateName', 'style': 'simple', 'explode': False }})
    placement_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'placementName', 'style': 'simple', 'explode': False }})
    project_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateDeviceWithPlacementHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssociateDeviceWithPlacementRequestBody:
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    

@dataclasses.dataclass
class AssociateDeviceWithPlacementRequest:
    headers: AssociateDeviceWithPlacementHeaders = dataclasses.field()
    path_params: AssociateDeviceWithPlacementPathParams = dataclasses.field()
    request: AssociateDeviceWithPlacementRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateDeviceWithPlacementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_device_with_placement_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
