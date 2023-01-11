import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseresource as shared_databaseresource
from ..shared import lftagpair as shared_lftagpair


@dataclass_json
@dataclasses.dataclass
class TaggedDatabase:
    r"""TaggedDatabase
    A structure describing a database resource with tags.
    """
    
    database: Optional[shared_databaseresource.DatabaseResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    lf_tags: Optional[list[shared_lftagpair.LfTagPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTags') }})
    
