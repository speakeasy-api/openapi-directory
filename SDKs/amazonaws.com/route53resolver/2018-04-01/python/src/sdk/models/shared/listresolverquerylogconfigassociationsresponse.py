import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverquerylogconfigassociation as shared_resolverquerylogconfigassociation


@dataclass_json
@dataclasses.dataclass
class ListResolverQueryLogConfigAssociationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_query_log_config_associations: Optional[list[shared_resolverquerylogconfigassociation.ResolverQueryLogConfigAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigAssociations') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    total_filtered_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalFilteredCount') }})
    
