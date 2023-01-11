import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_channelbasicinfo as shared_beezup_common_channelbasicinfo


@dataclass_json
@dataclasses.dataclass
class ReportByDayGlobalByChannel:
    channel: shared_beezup_common_channelbasicinfo.BeezUpCommonChannelBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    performance_indicator: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    
