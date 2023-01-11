import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import episode as shared_episode
from ..shared import resourcelink as shared_resourcelink


@dataclasses.dataclass
class GetEpisodesIDPreviousSiblingPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEpisodesIDPreviousSiblingQueryParams:
    rss: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rss', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSON:
    data: Optional[shared_episode.Episode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_resourcelink.ResourceLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclasses.dataclass
class GetEpisodesIDPreviousSiblingRequest:
    path_params: GetEpisodesIDPreviousSiblingPathParams = dataclasses.field()
    query_params: GetEpisodesIDPreviousSiblingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEpisodesIDPreviousSiblingResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_episodes_id_previous_sibling_200_application_vnd_api_plus_json_object: Optional[GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
