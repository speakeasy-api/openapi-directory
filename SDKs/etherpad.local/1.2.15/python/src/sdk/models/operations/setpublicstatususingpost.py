import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SetPublicStatusUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    public_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publicStatus', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetPublicStatusUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SetPublicStatusUsingPostRequest:
    query_params: SetPublicStatusUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SetPublicStatusUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_public_status_using_post_200_application_json_object: Optional[SetPublicStatusUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_post_400_application_json_object: Optional[SetPublicStatusUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_post_401_application_json_object: Optional[SetPublicStatusUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    set_public_status_using_post_500_application_json_object: Optional[SetPublicStatusUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
