import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceRevision:
    r"""SourceRevision
    Information about the version (or revision) of a source artifact that initiated a pipeline execution.
    """
    
    action_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    revision_summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionSummary') }})
    revision_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrl') }})
    
