import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PepMonitorUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PepMonitorUpdateRequestBody:
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhook' }})
    

@dataclasses.dataclass
class PepMonitorUpdateSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PepMonitorUpdateRequest:
    path_params: PepMonitorUpdatePathParams = dataclasses.field()
    security: PepMonitorUpdateSecurity = dataclasses.field()
    request: Optional[PepMonitorUpdateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PepMonitorUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pep_monitor_update_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    pep_monitor_update_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
