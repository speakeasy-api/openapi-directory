import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum as shared_oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum


@dataclasses.dataclass
class GetMeSecurity:
    user_access_token: shared_security.SchemeUserAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetMe200ApplicationJSONLinkedVendors:
    is_valid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValid') }})
    vendor: Optional[shared_oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMe200ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    linked_vendors: Optional[list[GetMe200ApplicationJSONLinkedVendors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedVendors') }})
    

@dataclasses.dataclass
class GetMeRequest:
    security: GetMeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_me_200_application_json_object: Optional[GetMe200ApplicationJSON] = dataclasses.field(default=None)
    
