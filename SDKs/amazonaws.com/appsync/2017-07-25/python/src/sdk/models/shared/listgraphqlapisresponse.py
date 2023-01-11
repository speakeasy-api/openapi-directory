import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import graphqlapi as shared_graphqlapi


@dataclass_json
@dataclasses.dataclass
class ListGraphqlApisResponse:
    graphql_apis: Optional[list[shared_graphqlapi.GraphqlAPI]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphqlApis') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
