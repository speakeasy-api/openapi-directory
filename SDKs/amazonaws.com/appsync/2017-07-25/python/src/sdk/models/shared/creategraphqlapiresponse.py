import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import graphqlapi as shared_graphqlapi


@dataclass_json
@dataclasses.dataclass
class CreateGraphqlAPIResponse:
    graphql_api: Optional[shared_graphqlapi.GraphqlAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphqlApi') }})
    
