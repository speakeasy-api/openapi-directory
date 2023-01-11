import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import season as shared_season
from ..shared import resourcelink as shared_resourcelink


@dataclasses.dataclass
class GetSeasonsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSeasonsID200ApplicationVndAPIPlusJSON:
    data: Optional[shared_season.Season] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_resourcelink.ResourceLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclasses.dataclass
class GetSeasonsIDRequest:
    path_params: GetSeasonsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSeasonsIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_seasons_id_200_application_vnd_api_plus_json_object: Optional[GetSeasonsID200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
