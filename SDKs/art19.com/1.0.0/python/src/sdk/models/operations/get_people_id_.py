import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person
from ..shared import resourcelink as shared_resourcelink


@dataclasses.dataclass
class GetPeopleIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetPeopleID200ApplicationVndAPIPlusJSON:
    data: Optional[shared_person.Person] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_resourcelink.ResourceLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclasses.dataclass
class GetPeopleIDRequest:
    path_params: GetPeopleIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPeopleIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_people_id_200_application_vnd_api_plus_json_object: Optional[GetPeopleID200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
