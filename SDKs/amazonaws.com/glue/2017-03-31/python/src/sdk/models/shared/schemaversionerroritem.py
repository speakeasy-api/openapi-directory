import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetails as shared_errordetails


@dataclass_json
@dataclasses.dataclass
class SchemaVersionErrorItem:
    r"""SchemaVersionErrorItem
    An object that contains the error details for an operation on a schema version.
    """
    
    error_details: Optional[shared_errordetails.ErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    version_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionNumber') }})
    
