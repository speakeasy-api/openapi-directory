import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbydayallchannels as shared_reportbydayallchannels
from ..shared import reportbydaybychannel as shared_reportbydaybychannel


@dataclass_json
@dataclasses.dataclass
class ReportByDay:
    all_channels: shared_reportbydayallchannels.ReportByDayAllChannels = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allChannels') }})
    by_channels: list[shared_reportbydaybychannel.ReportByDayByChannel] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('byChannels') }})
    day: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('day'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
