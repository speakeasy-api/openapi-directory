import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateRelationsPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateRelationsRequestBody:
    contracttest: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracttest') }})
    documentation: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    mock: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    testsuite: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testsuite') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateRelations200ApplicationJSON:
    contracttest: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contracttest') }})
    documentation: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    testsuite: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testsuite') }})
    

@dataclasses.dataclass
class CreateRelationsRequest:
    path_params: CreateRelationsPathParams = dataclasses.field()
    request: Optional[CreateRelationsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRelationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_relations_200_application_json_object: Optional[CreateRelations200ApplicationJSON] = dataclasses.field(default=None)
    
