import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FileEvidence:
    r"""FileEvidence
    This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
    """
    
    file_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileId') }})
    
