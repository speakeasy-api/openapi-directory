import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetPadIDUsingPostQueryParams:
    ro_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPadIDUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetPadIDUsingPostRequest:
    query_params: GetPadIDUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPadIDUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pad_id_using_post_200_application_json_object: Optional[GetPadIDUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_post_400_application_json_object: Optional[GetPadIDUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_post_401_application_json_object: Optional[GetPadIDUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    get_pad_id_using_post_500_application_json_object: Optional[GetPadIDUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
