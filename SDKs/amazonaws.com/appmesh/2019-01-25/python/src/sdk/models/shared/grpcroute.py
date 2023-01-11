import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcrouteaction as shared_grpcrouteaction
from ..shared import grpcroutematch as shared_grpcroutematch
from ..shared import grpcretrypolicy as shared_grpcretrypolicy
from ..shared import grpctimeout as shared_grpctimeout


@dataclass_json
@dataclasses.dataclass
class GrpcRoute:
    r"""GrpcRoute
    An object that represents a gRPC route type.
    """
    
    action: shared_grpcrouteaction.GrpcRouteAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: shared_grpcroutematch.GrpcRouteMatch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    retry_policy: Optional[shared_grpcretrypolicy.GrpcRetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[shared_grpctimeout.GrpcTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
