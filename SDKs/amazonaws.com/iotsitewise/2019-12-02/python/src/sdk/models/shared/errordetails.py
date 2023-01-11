import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum
from ..shared import detailederror as shared_detailederror


@dataclass_json
@dataclasses.dataclass
class ErrorDetails:
    r"""ErrorDetails
    Contains the details of an IoT SiteWise error.
    """
    
    code: shared_errorcode_enum.ErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    details: Optional[list[shared_detailederror.DetailedError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
