import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatestatus_enum as shared_certificatestatus_enum
from ..shared import filters as shared_filters


@dataclass_json
@dataclasses.dataclass
class ListCertificatesRequest:
    certificate_statuses: Optional[list[shared_certificatestatus_enum.CertificateStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateStatuses') }})
    includes: Optional[shared_filters.Filters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxItems') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
