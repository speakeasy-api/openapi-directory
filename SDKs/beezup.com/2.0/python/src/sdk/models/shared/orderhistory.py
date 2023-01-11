import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changeorderreporting as shared_changeorderreporting
from ..shared import harvestorderreporting as shared_harvestorderreporting


@dataclass_json
@dataclasses.dataclass
class OrderHistory:
    r"""OrderHistory
    Describe the history related to an order
    """
    
    change_order_reportings: Optional[list[shared_changeorderreporting.ChangeOrderReporting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeOrderReportings') }})
    harvest_order_reportings: Optional[list[shared_harvestorderreporting.HarvestOrderReporting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('harvestOrderReportings') }})
    last_modification_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModificationUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
