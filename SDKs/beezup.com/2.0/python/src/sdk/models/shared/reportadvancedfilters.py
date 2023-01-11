import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import linkclicktoordertype_enum as shared_linkclicktoordertype_enum
from ..shared import margintype_enum as shared_margintype_enum
from ..shared import performanceindicatorformula as shared_performanceindicatorformula


@dataclass_json
@dataclasses.dataclass
class ReportAdvancedFilters:
    link_click_to_order_type: shared_linkclicktoordertype_enum.LinkClickToOrderTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkClickToOrderType') }})
    margin_type: shared_margintype_enum.MarginTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marginType') }})
    only_direct_sales: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyDirectSales') }})
    only_payment_validated_orders: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyPaymentValidatedOrders') }})
    performance_indicator_formula: shared_performanceindicatorformula.PerformanceIndicatorFormula = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFormula') }})
    global_margin_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalMarginPercent') }})
    link_click_to_order_max_day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkClickToOrderMaxDay') }})
    
