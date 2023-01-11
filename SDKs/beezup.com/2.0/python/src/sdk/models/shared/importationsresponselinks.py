import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_importation_getreportingslink as shared_links_importation_getreportingslink
from ..shared import links_importation_startmanualupdatelink as shared_links_importation_startmanualupdatelink


@dataclass_json
@dataclasses.dataclass
class ImportationsResponseLinks:
    self: Optional[shared_links_importation_getreportingslink.LinksImportationGetReportingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    start: Optional[shared_links_importation_startmanualupdatelink.LinksImportationStartManualUpdateLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
