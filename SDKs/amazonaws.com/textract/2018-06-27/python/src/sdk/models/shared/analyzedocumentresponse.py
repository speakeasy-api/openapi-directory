import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import block as shared_block
from ..shared import documentmetadata as shared_documentmetadata
from ..shared import humanloopactivationoutput as shared_humanloopactivationoutput


@dataclass_json
@dataclasses.dataclass
class AnalyzeDocumentResponse:
    analyze_document_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyzeDocumentModelVersion') }})
    blocks: Optional[list[shared_block.Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocks') }})
    document_metadata: Optional[shared_documentmetadata.DocumentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    human_loop_activation_output: Optional[shared_humanloopactivationoutput.HumanLoopActivationOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationOutput') }})
    
