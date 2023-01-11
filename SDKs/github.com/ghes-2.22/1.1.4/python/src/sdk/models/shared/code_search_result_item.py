import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository
from ..shared import search_result_text_matches as shared_search_result_text_matches


@dataclass_json
@dataclasses.dataclass
class CodeSearchResultItem:
    r"""CodeSearchResultItem
    Code Search Result Item
    """
    
    git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_size') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_modified_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    line_numbers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_numbers') }})
    text_matches: Optional[list[shared_search_result_text_matches.SearchResultTextMatches]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text_matches') }})
    
