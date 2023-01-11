import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetInvoicePdfByUUIDPathParams:
    invoice_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoicePdfByUUID401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetInvoicePdfByUUIDRequest:
    path_params: GetInvoicePdfByUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoicePdfByUUIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_pdf_by_uuid_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    get_invoice_pdf_by_uuid_401_application_json_object: Optional[GetInvoicePdfByUUID401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
