import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import realtimeendpointinfo as shared_realtimeendpointinfo


@dataclass_json
@dataclasses.dataclass
class DeleteRealtimeEndpointOutput:
    r"""DeleteRealtimeEndpointOutput
    <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
    """
    
    ml_model_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    realtime_endpoint_info: Optional[shared_realtimeendpointinfo.RealtimeEndpointInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RealtimeEndpointInfo') }})
    
