import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaasset as shared_mediaasset
from ..shared import links as shared_links


@dataclasses.dataclass
class GetMediaAssetsQueryParams:
    ids_: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetMediaAssets200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_mediaasset.MediaAsset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMediaAssets400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetMediaAssets400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMediaAssets400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetMediaAssets400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetMediaAssetsRequest:
    query_params: GetMediaAssetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMediaAssetsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_media_assets_200_application_vnd_api_plus_json_object: Optional[GetMediaAssets200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_media_assets_400_application_vnd_api_plus_json_object: Optional[GetMediaAssets400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
