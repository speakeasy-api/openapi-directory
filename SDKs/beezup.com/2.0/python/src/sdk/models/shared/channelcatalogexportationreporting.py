import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogExportationReporting:
    client_ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientIpAddress') }})
    client_user_agent: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientUserAgent') }})
    exportation_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cache_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheStatus') }})
    exportation_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportationDuration') }})
    exported_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportedProductCount') }})
    
