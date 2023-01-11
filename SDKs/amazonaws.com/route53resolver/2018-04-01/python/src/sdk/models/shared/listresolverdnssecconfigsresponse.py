import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverdnssecconfig as shared_resolverdnssecconfig


@dataclass_json
@dataclasses.dataclass
class ListResolverDnssecConfigsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_dnssec_configs: Optional[list[shared_resolverdnssecconfig.ResolverDnssecConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverDnssecConfigs') }})
    
