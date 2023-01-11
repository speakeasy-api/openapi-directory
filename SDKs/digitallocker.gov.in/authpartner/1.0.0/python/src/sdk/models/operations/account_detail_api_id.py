import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountDetailAPIIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class AccountDetailAPIID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountDetailAPIID500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class AccountDetailAPIIDRequest:
    security: AccountDetailAPIIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountDetailAPIIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_detail_api_id_401_application_json_object: Optional[AccountDetailAPIID401ApplicationJSON] = dataclasses.field(default=None)
    account_detail_api_id_500_application_json_object: Optional[AccountDetailAPIID500ApplicationJSON] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
