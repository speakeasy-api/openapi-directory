import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftagpair as shared_lftagpair
from ..shared import columnlftag as shared_columnlftag
from ..shared import tableresource as shared_tableresource


@dataclass_json
@dataclasses.dataclass
class TaggedTable:
    r"""TaggedTable
    A structure describing a table resource with tags.
    """
    
    lf_tag_on_database: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagOnDatabase') }})
    lf_tags_on_columns: Optional[list[shared_columnlftag.ColumnLfTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnColumns') }})
    lf_tags_on_table: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagsOnTable') }})
    table: Optional[shared_tableresource.TableResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    
