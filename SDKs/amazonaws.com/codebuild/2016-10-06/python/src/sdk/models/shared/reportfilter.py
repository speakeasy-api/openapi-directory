import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportstatustype_enum as shared_reportstatustype_enum


@dataclass_json
@dataclasses.dataclass
class ReportFilter:
    r"""ReportFilter
     A filter used to return reports with the status specified by the input <code>status</code> parameter. 
    """
    
    status: Optional[shared_reportstatustype_enum.ReportStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
