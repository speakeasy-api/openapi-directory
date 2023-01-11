import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import links as shared_links


@dataclasses.dataclass
class GetImagesQueryParams:
    ids_: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_image.Image]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetImages400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetImages400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetImages400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetImagesRequest:
    query_params: GetImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_images_200_application_vnd_api_plus_json_object: Optional[GetImages200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_images_400_application_vnd_api_plus_json_object: Optional[GetImages400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
