import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPadIDUsingGetQueryParams:
    ro_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetPadIDUsingGetRequest:
    query_params: GetPadIDUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPadIDUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pad_id_using_get_200_application_json_object: Optional[GetPadIDUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_get_400_application_json_object: Optional[GetPadIDUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_get_401_application_json_object: Optional[GetPadIDUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_get_500_application_json_object: Optional[GetPadIDUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
