import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class PepOrderTypeEnum(str, Enum):
    UNKNOWN = ""
    B = "B"
    P = "P"


@dataclasses.dataclass
class PepOrderPathParams:
    search: str = dataclasses.field(metadata={'path_param': { 'field_name': 'search', 'style': 'simple', 'explode': False }})
    type: PepOrderTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PepOrderRequestBody:
    aliases: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Aliases' }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Country' }})
    dob: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DOB' }})
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FamilyName' }})
    filters: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'GivenName' }})
    lei: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LEI' }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Locale' }})
    medialists: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Medialists' }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MiddleName' }})
    monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Monitoring' }})
    peplists: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Peplists' }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Region' }})
    smart_match: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmartMatch' }})
    watchlists: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Watchlists' }})
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Webhook' }})
    

@dataclasses.dataclass
class PepOrderSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PepOrderRequest:
    path_params: PepOrderPathParams = dataclasses.field()
    security: PepOrderSecurity = dataclasses.field()
    request: Optional[PepOrderRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PepOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pep_order_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    pep_order_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
