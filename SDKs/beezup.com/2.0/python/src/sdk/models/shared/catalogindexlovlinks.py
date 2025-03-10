"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CatalogIndexLOVLinks:
    
    beez_up_column_data_type_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('beezUPColumnDataTypeLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    beez_up_column_display_group_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('beezUPColumnDisplayGroupLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    beez_up_column_importance_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('beezUPColumnImportanceLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    beez_up_column_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('beezUPColumnLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    compare_option_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('compareOptionLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    duplicate_product_value_strategy_lov: shared_beezup_common_lovlink3.BeezUPCommonLOVLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('duplicateProductValueStrategyLov') }})
    r"""Describe the way you have to follow to get access to the LOV"""  
    