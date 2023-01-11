import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportadvancedfilters as shared_reportadvancedfilters
from ..shared import analyticsproductcolumnfilters as shared_analyticsproductcolumnfilters
from ..shared import beezup_common_catalogcategoryfilter as shared_beezup_common_catalogcategoryfilter
from ..shared import performanceindicatortype_enum as shared_performanceindicatortype_enum
from ..shared import orderbydirection_enum as shared_orderbydirection_enum
from ..shared import performanceindicatorfilter as shared_performanceindicatorfilter
from ..shared import reportfilterperiodtype_enum as shared_reportfilterperiodtype_enum
from ..shared import productstatefilter_enum as shared_productstatefilter_enum
from ..shared import reporttype_enum as shared_reporttype_enum


@dataclass_json
@dataclasses.dataclass
class OptimiseRequest:
    r"""OptimiseRequest
    Contains common filter parameters
    """
    
    advanced_filters: shared_reportadvancedfilters.ReportAdvancedFilters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedFilters') }})
    begin_period_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginPeriodUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_period_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endPeriodUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_type: shared_reportfilterperiodtype_enum.ReportFilterPeriodTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodType') }})
    report_type: shared_reporttype_enum.ReportTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    analytics_product_column_filters: Optional[shared_analyticsproductcolumnfilters.AnalyticsProductColumnFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsProductColumnFilters') }})
    category_filter: Optional[shared_beezup_common_catalogcategoryfilter.BeezUpCommonCatalogCategoryFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryFilter') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    order_by: Optional[shared_performanceindicatortype_enum.PerformanceIndicatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    order_by_direction: Optional[shared_orderbydirection_enum.OrderByDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderByDirection') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    performance_indicator_filters: Optional[list[shared_performanceindicatorfilter.PerformanceIndicatorFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFilters') }})
    product_columns_to_display: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productColumnsToDisplay') }})
    product_state: Optional[shared_productstatefilter_enum.ProductStateFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productState') }})
    
