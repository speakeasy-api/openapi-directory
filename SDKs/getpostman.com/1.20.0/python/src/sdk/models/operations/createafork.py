import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateAForkPathParams:
    collection_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAForkQueryParams:
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAForkRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CreateAForkRequest:
    path_params: CreateAForkPathParams = dataclasses.field()
    query_params: CreateAForkQueryParams = dataclasses.field()
    request: Optional[CreateAForkRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAForkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
