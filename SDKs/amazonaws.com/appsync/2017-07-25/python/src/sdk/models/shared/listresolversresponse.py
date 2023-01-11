import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolver as shared_resolver


@dataclass_json
@dataclasses.dataclass
class ListResolversResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resolvers: Optional[list[shared_resolver.Resolver]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvers') }})
    
