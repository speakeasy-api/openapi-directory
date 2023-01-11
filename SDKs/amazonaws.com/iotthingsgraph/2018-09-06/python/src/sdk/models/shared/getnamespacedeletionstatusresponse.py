import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacedeletionstatuserrorcodes_enum as shared_namespacedeletionstatuserrorcodes_enum
from ..shared import namespacedeletionstatus_enum as shared_namespacedeletionstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetNamespaceDeletionStatusResponse:
    error_code: Optional[shared_namespacedeletionstatuserrorcodes_enum.NamespaceDeletionStatusErrorCodesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    namespace_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceArn') }})
    namespace_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    status: Optional[shared_namespacedeletionstatus_enum.NamespaceDeletionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
