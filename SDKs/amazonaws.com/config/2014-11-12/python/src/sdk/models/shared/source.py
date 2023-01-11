import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import owner_enum as shared_owner_enum
from ..shared import sourcedetail as shared_sourcedetail


@dataclass_json
@dataclasses.dataclass
class Source:
    r"""Source
    Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
    """
    
    owner: shared_owner_enum.OwnerEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    source_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIdentifier') }})
    source_details: Optional[list[shared_sourcedetail.SourceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    
