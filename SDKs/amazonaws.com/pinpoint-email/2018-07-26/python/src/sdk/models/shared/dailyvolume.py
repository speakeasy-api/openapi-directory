import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainispplacement as shared_domainispplacement
from ..shared import volumestatistics as shared_volumestatistics


@dataclass_json
@dataclasses.dataclass
class DailyVolume:
    r"""DailyVolume
    An object that contains information about the volume of email sent on each day of the analysis period.
    """
    
    domain_isp_placements: Optional[list[shared_domainispplacement.DomainIspPlacement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainIspPlacements') }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_statistics: Optional[shared_volumestatistics.VolumeStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeStatistics') }})
    
