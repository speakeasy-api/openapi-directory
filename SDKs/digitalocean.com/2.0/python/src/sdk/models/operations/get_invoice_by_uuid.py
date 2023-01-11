import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetInvoiceByUUIDPathParams:
    invoice_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSONInvoiceItems:
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    duration_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_unit') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    project_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_name') }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_uuid') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSONMeta:
    r"""GetInvoiceByUUID200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID200ApplicationJSON:
    meta: GetInvoiceByUUID200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    invoice_items: Optional[list[GetInvoiceByUUID200ApplicationJSONInvoiceItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_items') }})
    links: Optional[GetInvoiceByUUID200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceByUUID401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetInvoiceByUUIDRequest:
    path_params: GetInvoiceByUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceByUUIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_by_uuid_200_application_json_object: Optional[GetInvoiceByUUID200ApplicationJSON] = dataclasses.field(default=None)
    get_invoice_by_uuid_401_application_json_object: Optional[GetInvoiceByUUID401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
