import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListAllPadsUsingGet200ApplicationJSONData:
    pad_i_ds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padIDs') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllPadsUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListAllPadsUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllPadsUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllPadsUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAllPadsUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListAllPadsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_all_pads_using_get_200_application_json_object: Optional[ListAllPadsUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    list_all_pads_using_get_400_application_json_object: Optional[ListAllPadsUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    list_all_pads_using_get_401_application_json_object: Optional[ListAllPadsUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    list_all_pads_using_get_500_application_json_object: Optional[ListAllPadsUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
