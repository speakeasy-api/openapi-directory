import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UnpublishMockPathParams:
    mock_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UnpublishMock200ApplicationJSONMock:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UnpublishMock200ApplicationJSON:
    mock: Optional[UnpublishMock200ApplicationJSONMock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclasses.dataclass
class UnpublishMockRequest:
    path_params: UnpublishMockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UnpublishMockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unpublish_mock_200_application_json_object: Optional[UnpublishMock200ApplicationJSON] = dataclasses.field(default=None)
    
