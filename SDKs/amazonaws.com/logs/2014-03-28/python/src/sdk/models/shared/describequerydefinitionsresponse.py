import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import querydefinition as shared_querydefinition


@dataclass_json
@dataclasses.dataclass
class DescribeQueryDefinitionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    query_definitions: Optional[list[shared_querydefinition.QueryDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryDefinitions') }})
    
