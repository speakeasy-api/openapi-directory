import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentclass as shared_documentclass
from ..shared import documentlabel as shared_documentlabel


@dataclass_json
@dataclasses.dataclass
class ClassifyDocumentResponse:
    classes: Optional[list[shared_documentclass.DocumentClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classes') }})
    labels: Optional[list[shared_documentlabel.DocumentLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    
