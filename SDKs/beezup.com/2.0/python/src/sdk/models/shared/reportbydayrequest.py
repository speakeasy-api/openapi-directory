import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportadvancedfilters as shared_reportadvancedfilters


@dataclass_json
@dataclasses.dataclass
class ReportByDayRequest:
    begin_period_utc_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginPeriodUtcDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_period_utc_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endPeriodUtcDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    advanced_filters: Optional[shared_reportadvancedfilters.ReportAdvancedFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedFilters') }})
    catalog_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryId') }})
    channel_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelIds') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
