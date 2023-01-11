import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classification as shared_classification
from ..shared import resourcelink as shared_resourcelink


@dataclasses.dataclass
class GetClassificationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetClassificationsID200ApplicationVndAPIPlusJSON:
    data: Optional[shared_classification.Classification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_resourcelink.ResourceLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclasses.dataclass
class GetClassificationsIDRequest:
    path_params: GetClassificationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClassificationsIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_classifications_id_200_application_vnd_api_plus_json_object: Optional[GetClassificationsID200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
