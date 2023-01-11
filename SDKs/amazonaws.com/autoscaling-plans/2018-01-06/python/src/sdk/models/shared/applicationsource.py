import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagfilter as shared_tagfilter


@dataclass_json
@dataclasses.dataclass
class ApplicationSource:
    r"""ApplicationSource
    Represents an application source.
    """
    
    cloud_formation_stack_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormationStackARN') }})
    tag_filters: Optional[list[shared_tagfilter.TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagFilters') }})
    
