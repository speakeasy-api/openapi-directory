import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import series as shared_series
from ..shared import resourcelink as shared_resourcelink


@dataclasses.dataclass
class GetSeriesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeriesID200ApplicationVndAPIPlusJSON:
    data: Optional[shared_series.Series] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_resourcelink.ResourceLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclasses.dataclass
class GetSeriesIDRequest:
    path_params: GetSeriesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSeriesIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_series_id_200_application_vnd_api_plus_json_object: Optional[GetSeriesID200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
