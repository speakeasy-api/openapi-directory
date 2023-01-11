import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfilterheaderlinks as shared_reportfilterheaderlinks
from ..shared import reporttype_enum as shared_reporttype_enum


@dataclass_json
@dataclasses.dataclass
class ReportFilterHeader:
    links: shared_reportfilterheaderlinks.ReportFilterHeaderLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    report_filter_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterId') }})
    report_filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilterName') }})
    report_type: shared_reporttype_enum.ReportTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
