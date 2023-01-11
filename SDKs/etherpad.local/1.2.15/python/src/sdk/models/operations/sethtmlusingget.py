import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SetHTMLUsingGetQueryParams:
    html: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'html', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SetHTMLUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetHTMLUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetHTMLUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class SetHTMLUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SetHTMLUsingGetRequest:
    query_params: SetHTMLUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SetHTMLUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_html_using_get_200_application_json_object: Optional[SetHTMLUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    set_html_using_get_400_application_json_object: Optional[SetHTMLUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    set_html_using_get_401_application_json_object: Optional[SetHTMLUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    set_html_using_get_500_application_json_object: Optional[SetHTMLUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
