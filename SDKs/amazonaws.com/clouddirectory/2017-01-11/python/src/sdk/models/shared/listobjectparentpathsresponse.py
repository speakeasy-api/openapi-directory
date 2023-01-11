import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pathtoobjectidentifiers as shared_pathtoobjectidentifiers


@dataclass_json
@dataclasses.dataclass
class ListObjectParentPathsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    path_to_object_identifiers_list: Optional[list[shared_pathtoobjectidentifiers.PathToObjectIdentifiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathToObjectIdentifiersList') }})
    
