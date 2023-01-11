import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogexportationreporting as shared_channelcatalogexportationreporting
from ..shared import channelcatalogexportationhistorylinks as shared_channelcatalogexportationhistorylinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogExportationHistory:
    exportations: list[shared_channelcatalogexportationreporting.ChannelCatalogExportationReporting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportations') }})
    links: shared_channelcatalogexportationhistorylinks.ChannelCatalogExportationHistoryLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    
