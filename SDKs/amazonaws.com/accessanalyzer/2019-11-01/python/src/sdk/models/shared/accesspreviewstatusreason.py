import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspreviewstatusreasoncode_enum as shared_accesspreviewstatusreasoncode_enum


@dataclass_json
@dataclasses.dataclass
class AccessPreviewStatusReason:
    r"""AccessPreviewStatusReason
    Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
    """
    
    code: shared_accesspreviewstatusreasoncode_enum.AccessPreviewStatusReasonCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
