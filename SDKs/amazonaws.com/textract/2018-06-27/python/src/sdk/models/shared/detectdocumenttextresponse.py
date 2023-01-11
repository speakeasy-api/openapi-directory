import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import block as shared_block
from ..shared import documentmetadata as shared_documentmetadata


@dataclass_json
@dataclasses.dataclass
class DetectDocumentTextResponse:
    blocks: Optional[list[shared_block.Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocks') }})
    detect_document_text_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectDocumentTextModelVersion') }})
    document_metadata: Optional[shared_documentmetadata.DocumentMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    
