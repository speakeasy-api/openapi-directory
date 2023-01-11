import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverquerylogconfig as shared_resolverquerylogconfig


@dataclass_json
@dataclasses.dataclass
class DeleteResolverQueryLogConfigResponse:
    resolver_query_log_config: Optional[shared_resolverquerylogconfig.ResolverQueryLogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfig') }})
    
