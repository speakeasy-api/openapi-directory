import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportadvancedfilters as shared_reportadvancedfilters
from ..shared import beezup_common_catalogcategoryfilter as shared_beezup_common_catalogcategoryfilter
from ..shared import performanceindicatortype_enum as shared_performanceindicatortype_enum
from ..shared import orderbydirection_enum as shared_orderbydirection_enum
from ..shared import performanceindicatorfilter as shared_performanceindicatorfilter
from ..shared import reportfilterperiodtype_enum as shared_reportfilterperiodtype_enum


@dataclass_json
@dataclasses.dataclass
class ReportByCategoryRequest:
    r"""ReportByCategoryRequest
    Contains common filter parameters
    """
    
    advanced_filters: shared_reportadvancedfilters.ReportAdvancedFilters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedFilters') }})
    period_type: shared_reportfilterperiodtype_enum.ReportFilterPeriodTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    begin_period_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginPeriodUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    category_filter: Optional[shared_beezup_common_catalogcategoryfilter.BeezUpCommonCatalogCategoryFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryFilter') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    end_period_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endPeriodUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_by: Optional[shared_performanceindicatortype_enum.PerformanceIndicatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    order_by_direction: Optional[shared_orderbydirection_enum.OrderByDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderByDirection') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    performance_indicator_filters: Optional[list[shared_performanceindicatorfilter.PerformanceIndicatorFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFilters') }})
    
