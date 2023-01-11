import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverendpoint as shared_resolverendpoint


@dataclass_json
@dataclasses.dataclass
class CreateResolverEndpointResponse:
    resolver_endpoint: Optional[shared_resolverendpoint.ResolverEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpoint') }})
    
