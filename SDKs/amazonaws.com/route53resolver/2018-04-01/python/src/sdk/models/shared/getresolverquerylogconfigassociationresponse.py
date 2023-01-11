import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverquerylogconfigassociation as shared_resolverquerylogconfigassociation


@dataclass_json
@dataclasses.dataclass
class GetResolverQueryLogConfigAssociationResponse:
    resolver_query_log_config_association: Optional[shared_resolverquerylogconfigassociation.ResolverQueryLogConfigAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverQueryLogConfigAssociation') }})
    
