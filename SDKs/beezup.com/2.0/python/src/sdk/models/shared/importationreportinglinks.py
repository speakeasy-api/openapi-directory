import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_getreportlink as shared_links_importation_getreportlink


@dataclass_json
@dataclasses.dataclass
class ImportationReportingLinks:
    report: Optional[shared_links_importation_getreportlink.LinksImportationGetReportLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    
