import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutehostnamematch as shared_gatewayroutehostnamematch
from ..shared import grpcgatewayroutemetadata as shared_grpcgatewayroutemetadata


@dataclass_json
@dataclasses.dataclass
class GrpcGatewayRouteMatch:
    r"""GrpcGatewayRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    hostname: Optional[shared_gatewayroutehostnamematch.GatewayRouteHostnameMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    metadata: Optional[list[shared_grpcgatewayroutemetadata.GrpcGatewayRouteMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
