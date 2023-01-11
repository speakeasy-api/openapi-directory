import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret_scanning_alert_state_enum as shared_secret_scanning_alert_state_enum
from ..shared import secret_scanning_alert as shared_secret_scanning_alert


@dataclasses.dataclass
class SecretScanningUpdateAlertPathParams:
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SecretScanningUpdateAlertRequestBody:
    state: shared_secret_scanning_alert_state_enum.SecretScanningAlertStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

@dataclass_json
@dataclasses.dataclass
class SecretScanningUpdateAlert503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SecretScanningUpdateAlertRequest:
    path_params: SecretScanningUpdateAlertPathParams = dataclasses.field()
    request: Optional[SecretScanningUpdateAlertRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretScanningUpdateAlertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_scanning_alert: Optional[shared_secret_scanning_alert.SecretScanningAlert] = dataclasses.field(default=None)
    secret_scanning_update_alert_503_application_json_object: Optional[SecretScanningUpdateAlert503ApplicationJSON] = dataclasses.field(default=None)
    
