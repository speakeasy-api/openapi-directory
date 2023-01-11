import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetInvoiceSummaryByUUIDPathParams:
    invoice_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoice_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments:
    r"""GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments
    A summary of the credits and adjustments contributing to the invoice.
    """
    
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONOverages:
    r"""GetInvoiceSummaryByUUID200ApplicationJSONOverages
    A summary of the overages contributing to the invoice.
    """
    
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems:
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONProductCharges:
    r"""GetInvoiceSummaryByUUID200ApplicationJSONProductCharges
    A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.
    """
    
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    items: Optional[list[GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONTaxes:
    r"""GetInvoiceSummaryByUUID200ApplicationJSONTaxes
    A summary of the taxes contributing to the invoice.
    """
    
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress:
    r"""GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress
    The billing address of the customer being invoiced.
    """
    
    address_line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country_iso2_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_iso2_code') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID200ApplicationJSON:
    amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    billing_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_period') }})
    credits_and_adjustments: Optional[GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credits_and_adjustments') }})
    invoice_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_uuid') }})
    overages: Optional[GetInvoiceSummaryByUUID200ApplicationJSONOverages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overages') }})
    product_charges: Optional[GetInvoiceSummaryByUUID200ApplicationJSONProductCharges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_charges') }})
    taxes: Optional[GetInvoiceSummaryByUUID200ApplicationJSONTaxes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    user_billing_address: Optional[GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_billing_address') }})
    user_company: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_company') }})
    user_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_email') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInvoiceSummaryByUUID401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetInvoiceSummaryByUUIDRequest:
    path_params: GetInvoiceSummaryByUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceSummaryByUUIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_invoice_summary_by_uuid_200_application_json_object: Optional[GetInvoiceSummaryByUUID200ApplicationJSON] = dataclasses.field(default=None)
    get_invoice_summary_by_uuid_401_application_json_object: Optional[GetInvoiceSummaryByUUID401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
