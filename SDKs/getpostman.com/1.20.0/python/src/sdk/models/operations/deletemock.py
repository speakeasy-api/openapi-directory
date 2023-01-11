import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteMockPathParams:
    mock_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mock_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMock200ApplicationJSONMock:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMock200ApplicationJSON:
    mock: Optional[DeleteMock200ApplicationJSONMock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    

@dataclasses.dataclass
class DeleteMockRequest:
    path_params: DeleteMockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_mock_200_application_json_object: Optional[DeleteMock200ApplicationJSON] = dataclasses.field(default=None)
    
