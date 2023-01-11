import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blacklistentry as shared_blacklistentry


@dataclass_json
@dataclasses.dataclass
class GetBlacklistReportsResponse:
    r"""GetBlacklistReportsResponse
    An object that contains information about blacklist events.
    """
    
    blacklist_report: dict[str, list[shared_blacklistentry.BlacklistEntry]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlacklistReport') }})
    
