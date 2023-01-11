import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbycommonresponselinks as shared_reportbycommonresponselinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult
from ..shared import reportbyproduct as shared_reportbyproduct


@dataclass_json
@dataclasses.dataclass
class ReportByProductResponse:
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    links: shared_reportbycommonresponselinks.ReportByCommonResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: shared_beezup_common_paginationresult.BeezUpCommonPaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    products: list[shared_reportbyproduct.ReportByProduct] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
