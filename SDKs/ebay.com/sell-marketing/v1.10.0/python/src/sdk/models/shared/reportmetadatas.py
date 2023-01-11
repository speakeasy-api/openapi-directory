import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportmetadata as shared_reportmetadata


@dataclass_json
@dataclasses.dataclass
class ReportMetadatas:
    r"""ReportMetadatas
    This type defines the metadata used by the all report types.
    """
    
    report_metadata: Optional[list[shared_reportmetadata.ReportMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportMetadata') }})
    
