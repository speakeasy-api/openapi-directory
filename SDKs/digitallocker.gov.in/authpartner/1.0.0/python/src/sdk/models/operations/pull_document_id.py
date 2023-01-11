import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import response13 as shared_response13
from ..shared import responsesix as shared_responsesix
from ..shared import response14 as shared_response14
from ..shared import response15 as shared_response15
from ..shared import response16 as shared_response16
from ..shared import response17 as shared_response17
from ..shared import response18 as shared_response18


@dataclasses.dataclass
class PullDocumentIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class PullDocumentID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class PullDocumentID404ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class PullDocumentIDRequest:
    security: PullDocumentIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PullDocumentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_document_id_400_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    pull_document_id_401_application_json_object: Optional[PullDocumentID401ApplicationJSON] = dataclasses.field(default=None)
    pull_document_id_404_application_json_object: Optional[PullDocumentID404ApplicationJSON] = dataclasses.field(default=None)
    pull_document_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    sample: Optional[Any] = dataclasses.field(default=None)
    
