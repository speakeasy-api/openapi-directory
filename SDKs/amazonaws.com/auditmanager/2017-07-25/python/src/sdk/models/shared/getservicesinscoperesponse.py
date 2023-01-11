import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicemetadata as shared_servicemetadata


@dataclass_json
@dataclasses.dataclass
class GetServicesInScopeResponse:
    service_metadata: Optional[list[shared_servicemetadata.ServiceMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceMetadata') }})
    
