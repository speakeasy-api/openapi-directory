import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainassociation as shared_domainassociation


@dataclass_json
@dataclasses.dataclass
class ListDomainAssociationsResult:
    r"""ListDomainAssociationsResult
     The result structure for the list domain association request. 
    """
    
    domain_associations: list[shared_domainassociation.DomainAssociation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
