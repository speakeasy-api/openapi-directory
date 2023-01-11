import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabasebundle as shared_relationaldatabasebundle


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseBundlesResult:
    bundles: Optional[list[shared_relationaldatabasebundle.RelationalDatabaseBundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
