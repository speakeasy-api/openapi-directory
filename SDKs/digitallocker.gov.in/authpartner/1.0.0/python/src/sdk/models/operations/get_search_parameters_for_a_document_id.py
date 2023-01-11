import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import searchparametersresponse as shared_searchparametersresponse


@dataclasses.dataclass
class GetSearchParametersForADocumentIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetSearchParametersForADocumentID400ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSearchParametersForADocumentID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSearchParametersForADocumentID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetSearchParametersForADocumentIDRequest:
    security: GetSearchParametersForADocumentIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GetSearchParametersForADocumentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_search_parameters_for_a_document_id_400_application_json_object: Optional[GetSearchParametersForADocumentID400ApplicationJSON] = dataclasses.field(default=None)
    get_search_parameters_for_a_document_id_401_application_json_object: Optional[GetSearchParametersForADocumentID401ApplicationJSON] = dataclasses.field(default=None)
    get_search_parameters_for_a_document_id_500_application_json_object: Optional[GetSearchParametersForADocumentID500ApplicationJSON] = dataclasses.field(default=None)
    search_parameters_response: Optional[list[shared_searchparametersresponse.SearchParametersResponse]] = dataclasses.field(default=None)
    
