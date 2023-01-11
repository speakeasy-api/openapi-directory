import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import telemetry_enum as shared_telemetry_enum


@dataclasses.dataclass
class UpdateThingRuntimeConfigurationPathParams:
    thing_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ThingName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateThingRuntimeConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration:
    r"""UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
    Configuration settings for running telemetry.
    """
    
    telemetry: Optional[shared_telemetry_enum.TelemetryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Telemetry') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateThingRuntimeConfigurationRequestBody:
    telemetry_configuration: Optional[UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TelemetryConfiguration') }})
    

@dataclasses.dataclass
class UpdateThingRuntimeConfigurationRequest:
    headers: UpdateThingRuntimeConfigurationHeaders = dataclasses.field()
    path_params: UpdateThingRuntimeConfigurationPathParams = dataclasses.field()
    request: UpdateThingRuntimeConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateThingRuntimeConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    update_thing_runtime_configuration_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
