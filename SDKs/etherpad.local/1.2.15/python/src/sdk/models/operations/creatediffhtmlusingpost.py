import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateDiffHTMLUsingPostQueryParams:
    end_rev: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endRev', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    start_rev: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startRev', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDiffHTMLUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDiffHTMLUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDiffHTMLUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDiffHTMLUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateDiffHTMLUsingPostRequest:
    query_params: CreateDiffHTMLUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateDiffHTMLUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_diff_html_using_post_200_application_json_object: Optional[CreateDiffHTMLUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    create_diff_html_using_post_400_application_json_object: Optional[CreateDiffHTMLUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    create_diff_html_using_post_401_application_json_object: Optional[CreateDiffHTMLUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    create_diff_html_using_post_500_application_json_object: Optional[CreateDiffHTMLUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
