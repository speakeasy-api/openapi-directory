import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dailyvolume as shared_dailyvolume
from ..shared import overallvolume as shared_overallvolume


@dataclass_json
@dataclasses.dataclass
class GetDomainStatisticsReportResponse:
    r"""GetDomainStatisticsReportResponse
    An object that includes statistics that are related to the domain that you specified.
    """
    
    daily_volumes: list[shared_dailyvolume.DailyVolume] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyVolumes') }})
    overall_volume: shared_overallvolume.OverallVolume = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallVolume') }})
    
