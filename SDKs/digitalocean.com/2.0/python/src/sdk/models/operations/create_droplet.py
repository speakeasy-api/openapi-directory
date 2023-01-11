import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateDropletRequestBodySingleDropletRequest:
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    backups: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    ipv6: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    private_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_networking') }})
    ssh_keys: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_data') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    with_droplet_agent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('with_droplet_agent') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDropletRequestBodyMultipleDropletRequest:
    image: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    backups: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    ipv6: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    private_networking: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_networking') }})
    ssh_keys: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    user_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_data') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    with_droplet_agent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('with_droplet_agent') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDroplet401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateDropletRequest:
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDropletResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_droplet_202_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    create_droplet_401_application_json_object: Optional[CreateDroplet401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
