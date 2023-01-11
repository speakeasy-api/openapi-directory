import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_channelbasicinfo as shared_beezup_common_channelbasicinfo
from ..shared import beezup_common_productbasicinfo as shared_beezup_common_productbasicinfo


@dataclass_json
@dataclasses.dataclass
class TrackedClick:
    channel: shared_beezup_common_channelbasicinfo.BeezUpCommonChannelBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    product: shared_beezup_common_productbasicinfo.BeezUpCommonProductBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('utcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
