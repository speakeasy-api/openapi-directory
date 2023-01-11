import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import response3 as shared_response3
from ..shared import response4 as shared_response4
from ..shared import response5 as shared_response5
from ..shared import response6 as shared_response6
from ..shared import response1 as shared_response1
from ..shared import response2 as shared_response2


@dataclasses.dataclass
class GetFileFromURIIDPathParams:
    uri: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFileFromURIIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class GetFileFromURIID400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFileFromURIID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFileFromURIID404ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetFileFromURIIDRequest:
    path_params: GetFileFromURIIDPathParams = dataclasses.field()
    security: GetFileFromURIIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFileFromURIIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_file_from_uri_id_200_application_pdf_string: Optional[str] = dataclasses.field(default=None)
    get_file_from_uri_id_200_image_jpeg_string: Optional[str] = dataclasses.field(default=None)
    get_file_from_uri_id_200_image_jpg_string: Optional[str] = dataclasses.field(default=None)
    get_file_from_uri_id_200_image_png_string: Optional[str] = dataclasses.field(default=None)
    get_file_from_uri_id_400_application_json_object: Optional[GetFileFromURIID400ApplicationJSON] = dataclasses.field(default=None)
    get_file_from_uri_id_401_application_json_object: Optional[GetFileFromURIID401ApplicationJSON] = dataclasses.field(default=None)
    get_file_from_uri_id_404_application_json_object: Optional[GetFileFromURIID404ApplicationJSON] = dataclasses.field(default=None)
    get_file_from_uri_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_file_from_uri_id_503_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
