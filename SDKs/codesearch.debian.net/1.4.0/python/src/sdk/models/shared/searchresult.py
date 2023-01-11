import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SearchResult:
    r"""SearchResult
    A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
    """
    
    context: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    package: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    context_after: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_after') }})
    context_before: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context_before') }})
    
