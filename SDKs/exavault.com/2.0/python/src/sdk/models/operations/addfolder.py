import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceresponse as shared_resourceresponse


@dataclasses.dataclass
class AddFolderHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddFolderAddFolderRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentResource') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclasses.dataclass
class AddFolderRequest:
    headers: AddFolderHeaders = dataclasses.field()
    request: Optional[AddFolderAddFolderRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_response: Optional[shared_resourceresponse.ResourceResponse] = dataclasses.field(default=None)
    
