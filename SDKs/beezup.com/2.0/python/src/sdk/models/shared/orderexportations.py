import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderexportationreporting as shared_orderexportationreporting
from ..shared import orderexportationslinks as shared_orderexportationslinks
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class OrderExportations:
    r"""OrderExportations
    The list of Order report exportations.\
    The paginationResult properties can be null if the list is empty.
    
    """
    
    exportations: list[shared_orderexportationreporting.OrderExportationReporting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportations') }})
    links: shared_orderexportationslinks.OrderExportationsLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    
