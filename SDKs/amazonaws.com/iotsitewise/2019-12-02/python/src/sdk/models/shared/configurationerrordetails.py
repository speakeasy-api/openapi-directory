import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcode_enum as shared_errorcode_enum


@dataclass_json
@dataclasses.dataclass
class ConfigurationErrorDetails:
    r"""ConfigurationErrorDetails
    Contains the details of an IoT SiteWise configuration error.
    """
    
    code: shared_errorcode_enum.ErrorCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
