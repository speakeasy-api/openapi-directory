import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class VatLevelTwoPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VatLevelTwoRequestBody:
    vat_number: str = dataclasses.field(metadata={'form': { 'field_name': 'vatNumber' }})
    confirmation: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'confirmation' }})
    

@dataclasses.dataclass
class VatLevelTwoSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class VatLevelTwoRequest:
    path_params: VatLevelTwoPathParams = dataclasses.field()
    request: VatLevelTwoRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLevelTwoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VatLevelTwoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vat_level_two_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    vat_level_two_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
