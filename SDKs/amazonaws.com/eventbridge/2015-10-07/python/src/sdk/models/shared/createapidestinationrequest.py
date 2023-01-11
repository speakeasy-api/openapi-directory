import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidestinationhttpmethod_enum as shared_apidestinationhttpmethod_enum


@dataclass_json
@dataclasses.dataclass
class CreateAPIDestinationRequest:
    connection_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    http_method: shared_apidestinationhttpmethod_enum.APIDestinationHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    invocation_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationEndpoint') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    invocation_rate_limit_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationRateLimitPerSecond') }})
    
