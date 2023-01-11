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
class GetEAadhaarDataInXMLFormatIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class GetEAadhaarDataInXMLFormatID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEAadhaarDataInXMLFormatID404ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetEAadhaarDataInXMLFormatIDRequest:
    security: GetEAadhaarDataInXMLFormatIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEAadhaarDataInXMLFormatIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_e_aadhaar_data_in_xml_format_id_401_application_json_object: Optional[GetEAadhaarDataInXMLFormatID401ApplicationJSON] = dataclasses.field(default=None)
    get_e_aadhaar_data_in_xml_format_id_404_application_json_object: Optional[GetEAadhaarDataInXMLFormatID404ApplicationJSON] = dataclasses.field(default=None)
    get_e_aadhaar_data_in_xml_format_id_500_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_e_aadhaar_data_in_xml_format_id_503_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
