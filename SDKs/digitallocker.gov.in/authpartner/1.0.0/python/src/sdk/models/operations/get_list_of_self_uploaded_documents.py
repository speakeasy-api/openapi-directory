import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocuments401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocuments404ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocuments500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsRequest:
    security: GetListOfSelfUploadedDocumentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_self_uploaded_documents_401_application_json_object: Optional[GetListOfSelfUploadedDocuments401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_self_uploaded_documents_404_application_json_object: Optional[GetListOfSelfUploadedDocuments404ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_self_uploaded_documents_500_application_json_object: Optional[GetListOfSelfUploadedDocuments500ApplicationJSON] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
