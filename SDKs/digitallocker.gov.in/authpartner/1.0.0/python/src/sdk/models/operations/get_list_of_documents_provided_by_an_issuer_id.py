import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import doctyperesponse as shared_doctyperesponse


@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerIDRequest:
    security: GetListOfDocumentsProvidedByAnIssuerIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class GetListOfDocumentsProvidedByAnIssuerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    doc_type_response: Optional[shared_doctyperesponse.DocTypeResponse] = dataclasses.field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_400_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID400ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_401_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_documents_provided_by_an_issuer_id_500_application_json_object: Optional[GetListOfDocumentsProvidedByAnIssuerID500ApplicationJSON] = dataclasses.field(default=None)
    
