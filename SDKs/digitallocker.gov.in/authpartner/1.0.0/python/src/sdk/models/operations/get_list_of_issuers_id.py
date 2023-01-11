import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import issuerresponse as shared_issuerresponse


@dataclasses.dataclass
class GetListOfIssuersIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfIssuersID400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfIssuersID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfIssuersID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfIssuersIDRequest:
    security: GetListOfIssuersIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GetListOfIssuersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_issuers_id_400_application_json_object: Optional[GetListOfIssuersID400ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_issuers_id_401_application_json_object: Optional[GetListOfIssuersID401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_issuers_id_500_application_json_object: Optional[GetListOfIssuersID500ApplicationJSON] = dataclasses.field(default=None)
    issuer_response: Optional[shared_issuerresponse.IssuerResponse] = dataclasses.field(default=None)
    
