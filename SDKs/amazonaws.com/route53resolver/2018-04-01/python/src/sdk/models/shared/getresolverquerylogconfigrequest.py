import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetResolverQueryLogConfigRequest:
    resolver_query_log_config_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigId') }})
    
