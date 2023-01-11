import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetListOfIssuedDocumentsID200ApplicationJSON:
    items: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfIssuedDocumentsID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetListOfIssuedDocumentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_list_of_issued_documents_id_200_application_json_object: Optional[GetListOfIssuedDocumentsID200ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_issued_documents_id_401_application_json_object: Optional[GetListOfIssuedDocumentsID401ApplicationJSON] = dataclasses.field(default=None)
    get_list_of_issued_documents_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
