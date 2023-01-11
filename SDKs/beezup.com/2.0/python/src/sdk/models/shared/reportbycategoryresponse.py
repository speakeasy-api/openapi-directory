import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbycategory as shared_reportbycategory
from ..shared import reportbycommonresponselinks as shared_reportbycommonresponselinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class ReportByCategoryResponse:
    categories: Optional[list[shared_reportbycategory.ReportByCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    links: Optional[shared_reportbycommonresponselinks.ReportByCommonResponseLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    
