import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import block as shared_block
from ..shared import documentmetadata as shared_documentmetadata
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import warning as shared_warning


@dataclass_json
@dataclasses.dataclass
class GetDocumentAnalysisResponse:
    analyze_document_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyzeDocumentModelVersion') }})
    blocks: Optional[list[shared_block.Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocks') }})
    document_metadata: Optional[shared_documentmetadata.DocumentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    job_status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    warnings: Optional[list[shared_warning.Warning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    
