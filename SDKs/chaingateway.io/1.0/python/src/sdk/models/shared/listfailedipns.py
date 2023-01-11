import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedipn as shared_failedipn


@dataclass_json
@dataclasses.dataclass
class ListFailedIPNs:
    failed_ipns: list[shared_failedipn.FailedIpn] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_ipns') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
