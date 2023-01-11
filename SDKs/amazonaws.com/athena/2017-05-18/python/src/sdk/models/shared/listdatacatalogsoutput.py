import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacatalogsummary as shared_datacatalogsummary


@dataclass_json
@dataclasses.dataclass
class ListDataCatalogsOutput:
    data_catalogs_summary: Optional[list[shared_datacatalogsummary.DataCatalogSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalogsSummary') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
