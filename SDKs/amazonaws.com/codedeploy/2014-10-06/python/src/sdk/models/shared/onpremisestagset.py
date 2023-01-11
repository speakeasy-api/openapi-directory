import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagfilter as shared_tagfilter


@dataclass_json
@dataclasses.dataclass
class OnPremisesTagSet:
    r"""OnPremisesTagSet
    Information about groups of on-premises instance tags.
    """
    
    on_premises_tag_set_list: Optional[list[list[shared_tagfilter.TagFilter]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesTagSetList') }})
    
