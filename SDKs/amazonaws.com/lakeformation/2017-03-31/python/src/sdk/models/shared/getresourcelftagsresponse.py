import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftagpair as shared_lftagpair
from ..shared import columnlftag as shared_columnlftag


@dataclass_json
@dataclasses.dataclass
class GetResourceLfTagsResponse:
    lf_tag_on_database: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagOnDatabase') }})
    lf_tags_on_columns: Optional[list[shared_columnlftag.ColumnLfTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnColumns') }})
    lf_tags_on_table: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnTable') }})
    
