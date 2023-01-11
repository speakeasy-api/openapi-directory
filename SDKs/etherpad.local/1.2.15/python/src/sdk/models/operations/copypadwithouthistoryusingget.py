import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGetQueryParams:
    destination_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'destinationID', 'style': 'form', 'explode': True }})
    force: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGetRequest:
    query_params: CopyPadWithoutHistoryUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CopyPadWithoutHistoryUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    copy_pad_without_history_using_get_200_application_json_object: Optional[CopyPadWithoutHistoryUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    copy_pad_without_history_using_get_400_application_json_object: Optional[CopyPadWithoutHistoryUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    copy_pad_without_history_using_get_401_application_json_object: Optional[CopyPadWithoutHistoryUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    copy_pad_without_history_using_get_500_application_json_object: Optional[CopyPadWithoutHistoryUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
