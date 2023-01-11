import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asseterrordetails as shared_asseterrordetails


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateProjectAssetsResponse:
    errors: Optional[list[shared_asseterrordetails.AssetErrorDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
