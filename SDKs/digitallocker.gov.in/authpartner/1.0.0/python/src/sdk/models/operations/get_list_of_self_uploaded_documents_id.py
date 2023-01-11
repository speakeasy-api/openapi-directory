import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsID404ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsID500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsIDRequest:
    path_params: GetListOfSelfUploadedDocumentsIDPathParams = dataclasses.field()
    security: GetListOfSelfUploadedDocumentsIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListOfSelfUploadedDocumentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_self_uploaded_documents_id_401_application_json_object: Optional[GetListOfSelfUploadedDocumentsID401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_self_uploaded_documents_id_404_application_json_object: Optional[GetListOfSelfUploadedDocumentsID404ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_self_uploaded_documents_id_500_application_json_object: Optional[GetListOfSelfUploadedDocumentsID500ApplicationJSON] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
