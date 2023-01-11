import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroutemetadata as shared_grpcroutemetadata


@dataclass_json
@dataclasses.dataclass
class GrpcRouteMatch:
    r"""GrpcRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    metadata: Optional[list[shared_grpcroutemetadata.GrpcRouteMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    method_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
