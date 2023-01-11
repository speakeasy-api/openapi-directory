import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitytype_enum as shared_entitytype_enum
from ..shared import entityfilter as shared_entityfilter


@dataclass_json
@dataclasses.dataclass
class SearchEntitiesRequest:
    entity_types: list[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypes') }})
    filters: Optional[list[shared_entityfilter.EntityFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    namespace_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceVersion') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
