import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbychannel as shared_reportbychannel
from ..shared import reportbycommonresponselinks as shared_reportbycommonresponselinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class ReportByChannelResponse:
    channels: list[shared_reportbychannel.ReportByChannel] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    links: shared_reportbycommonresponselinks.ReportByCommonResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: shared_beezup_common_paginationresult.BeezUpCommonPaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    
