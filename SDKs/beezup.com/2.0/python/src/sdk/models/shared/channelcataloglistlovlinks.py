import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogListLovLinks:
    channel_catalog_exclusion_filter_operator_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogExclusionFilterOperatorLov') }})
    channel_catalog_export_cache_status_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogExportCacheStatusLov') }})
    
