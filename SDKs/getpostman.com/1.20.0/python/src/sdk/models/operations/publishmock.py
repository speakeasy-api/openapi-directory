import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PublishMockPathParams:
    mock_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PublishMock200ApplicationJSONMock:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PublishMock200ApplicationJSON:
    mock: Optional[PublishMock200ApplicationJSONMock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclasses.dataclass
class PublishMockRequest:
    path_params: PublishMockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PublishMockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    publish_mock_200_application_json_object: Optional[PublishMock200ApplicationJSON] = dataclasses.field(default=None)
    
