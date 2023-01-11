import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteProxyHeaders:
    x_apideck_app_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_url: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-downstream-url', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    x_apideck_downstream_authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-apideck-downstream-authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProxySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteProxy401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    status_code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_name') }})
    

@dataclasses.dataclass
class DeleteProxyRequest:
    headers: DeleteProxyHeaders = dataclasses.field()
    security: DeleteProxySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProxyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_proxy_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    delete_proxy_401_application_json_object: Optional[DeleteProxy401ApplicationJSON] = dataclasses.field(default=None)
    delete_proxy_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
