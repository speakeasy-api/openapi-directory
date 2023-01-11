import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcretrypolicyevent_enum as shared_grpcretrypolicyevent_enum
from ..shared import duration as shared_duration
from ..shared import tcpretrypolicyevent_enum as shared_tcpretrypolicyevent_enum


@dataclass_json
@dataclasses.dataclass
class GrpcRetryPolicy:
    r"""GrpcRetryPolicy
    An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href=\"https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on\">Envoy documentation</a>.
    """
    
    max_retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    per_retry_timeout: shared_duration.Duration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('perRetryTimeout') }})
    grpc_retry_events: Optional[list[shared_grpcretrypolicyevent_enum.GrpcRetryPolicyEventEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRetryEvents') }})
    http_retry_events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRetryEvents') }})
    tcp_retry_events: Optional[list[shared_tcpretrypolicyevent_enum.TCPRetryPolicyEventEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRetryEvents') }})
    
