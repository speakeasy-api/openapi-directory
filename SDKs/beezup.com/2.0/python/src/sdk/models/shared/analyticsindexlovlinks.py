import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class AnalyticsIndexLovLinks:
    analytics_numerical_product_column_filter_operator_name_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsNumericalProductColumnFilterOperatorNameLov') }})
    analytics_product_column_filter_operator_name_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsProductColumnFilterOperatorNameLov') }})
    analytics_string_product_column_filter_operator_name_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsStringProductColumnFilterOperatorNameLov') }})
    performance_indicator_filter_operator_name_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFilterOperatorNameLov') }})
    performance_indicator_formula_operator_name_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFormulaOperatorNameLov') }})
    performance_indicator_formula_parameter_type_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorFormulaParameterTypeLov') }})
    performance_indicator_type_for_reports_by_category_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorTypeForReportsByCategoryLov') }})
    performance_indicator_type_for_reports_by_channel_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorTypeForReportsByChannelLov') }})
    performance_indicator_type_for_reports_by_product_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorTypeForReportsByProductLov') }})
    performance_indicator_type_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicatorTypeLov') }})
    store_optimisation_rule_execution_status_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeOptimisationRuleExecutionStatusLov') }})
    
