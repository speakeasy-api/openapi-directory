import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VolumeStatistics:
    r"""VolumeStatistics
    An object that contains information about the amount of email that was delivered to recipients.
    """
    
    inbox_raw_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboxRawCount') }})
    projected_inbox: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectedInbox') }})
    projected_spam: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectedSpam') }})
    spam_raw_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpamRawCount') }})
    
