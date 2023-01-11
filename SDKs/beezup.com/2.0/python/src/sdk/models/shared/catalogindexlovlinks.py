import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class CatalogIndexLovLinks:
    beez_up_column_data_type_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnDataTypeLov') }})
    beez_up_column_display_group_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnDisplayGroupLov') }})
    beez_up_column_importance_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnImportanceLov') }})
    beez_up_column_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnLov') }})
    compare_option_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compareOptionLov') }})
    duplicate_product_value_strategy_lov: shared_beezup_common_lovlink3.BeezUpCommonLovLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateProductValueStrategyLov') }})
    
