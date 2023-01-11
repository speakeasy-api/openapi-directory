import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import responsesix as shared_responsesix
from ..shared import responseseven as shared_responseseven


@dataclasses.dataclass
class GetListOfIssuedDocumentsVersion1IDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfIssuedDocumentsVersion1ID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfIssuedDocumentsVersion1IDRequest:
    security: GetListOfIssuedDocumentsVersion1IDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListOfIssuedDocumentsVersion1IDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_issued_documents_version1_id_401_application_json_object: Optional[GetListOfIssuedDocumentsVersion1ID401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_issued_documents_version1_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
