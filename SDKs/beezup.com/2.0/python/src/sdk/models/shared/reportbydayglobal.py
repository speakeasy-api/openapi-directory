import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbydayglobalallchannels as shared_reportbydayglobalallchannels
from ..shared import reportbydayglobalbychannel as shared_reportbydayglobalbychannel


@dataclass_json
@dataclasses.dataclass
class ReportByDayGlobal:
    all_channels: shared_reportbydayglobalallchannels.ReportByDayGlobalAllChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allChannels') }})
    by_channels: list[shared_reportbydayglobalbychannel.ReportByDayGlobalByChannel] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('byChannels') }})
    
