import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcmetadatamatchmethod as shared_grpcmetadatamatchmethod


@dataclass_json
@dataclasses.dataclass
class GrpcGatewayRouteMetadata:
    r"""GrpcGatewayRouteMetadata
    An object representing the metadata of the gateway route.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    invert: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invert') }})
    match: Optional[shared_grpcmetadatamatchmethod.GrpcMetadataMatchMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
