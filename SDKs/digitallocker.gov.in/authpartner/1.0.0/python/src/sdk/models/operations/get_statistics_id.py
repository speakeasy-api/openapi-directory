import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import getstatisticsresponse as shared_getstatisticsresponse


@dataclasses.dataclass
class GetStatisticsIDSecurity:
    oauthsecurity: shared_security.SchemeOauthsecurity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsID400ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetStatisticsID500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class GetStatisticsIDRequest:
    security: GetStatisticsIDSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GetStatisticsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_statistics_id_400_application_json_object: Optional[GetStatisticsID400ApplicationJSON] = dataclasses.field(default=None)
    get_statistics_id_401_application_json_object: Optional[GetStatisticsID401ApplicationJSON] = dataclasses.field(default=None)
    get_statistics_id_500_application_json_object: Optional[GetStatisticsID500ApplicationJSON] = dataclasses.field(default=None)
    get_statistics_response: Optional[shared_getstatisticsresponse.GetStatisticsResponse] = dataclasses.field(default=None)
    
