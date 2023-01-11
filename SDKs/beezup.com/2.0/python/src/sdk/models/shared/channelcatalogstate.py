import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_apisettingsstatus_enum as shared_beezup_common_apisettingsstatus_enum
from ..shared import categorymappingstate as shared_categorymappingstate
from ..shared import columnmappingstatus_enum as shared_columnmappingstatus_enum


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogState:
    r"""ChannelCatalogState
    Channel Catalog State
    """
    
    category_mapping_state: shared_categorymappingstate.CategoryMappingState = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryMappingState') }})
    column_mapping_status: shared_columnmappingstatus_enum.ColumnMappingStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMappingStatus') }})
    exported_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportedProductCount') }})
    api_settings_status: Optional[shared_beezup_common_apisettingsstatus_enum.BeezUpCommonAPISettingsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSettingsStatus') }})
    
