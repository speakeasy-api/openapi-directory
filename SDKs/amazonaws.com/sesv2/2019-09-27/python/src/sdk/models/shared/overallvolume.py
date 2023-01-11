import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainispplacement as shared_domainispplacement
from ..shared import volumestatistics as shared_volumestatistics


@dataclass_json
@dataclasses.dataclass
class OverallVolume:
    r"""OverallVolume
    An object that contains information about email that was sent from the selected domain.
    """
    
    domain_isp_placements: Optional[list[shared_domainispplacement.DomainIspPlacement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainIspPlacements') }})
    read_rate_percent: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadRatePercent') }})
    volume_statistics: Optional[shared_volumestatistics.VolumeStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeStatistics') }})
    
