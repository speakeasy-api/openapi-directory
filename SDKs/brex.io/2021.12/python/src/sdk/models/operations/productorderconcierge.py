import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductOrderConciergeRequestBody:
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'contactEmail' }})
    contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'contactPhone' }})
    cost_confirmation: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'costConfirmation' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country' }})
    financial_data: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'financialData' }})
    historic_information: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'historicInformation' }})
    information_requirements: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'informationRequirements' }})
    location_investigation: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'locationInvestigation' }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'priority' }})
    register_data: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'registerData' }})
    register_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'registerNumber' }})
    subject_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'subjectId' }})
    

@dataclasses.dataclass
class ProductOrderConciergeSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductOrderConciergeRequest:
    security: ProductOrderConciergeSecurity = dataclasses.field()
    request: Optional[ProductOrderConciergeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ProductOrderConciergeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_order_concierge_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_order_concierge_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
