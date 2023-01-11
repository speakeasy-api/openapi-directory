import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainassociation as shared_domainassociation


@dataclass_json
@dataclasses.dataclass
class UpdateDomainAssociationResult:
    r"""UpdateDomainAssociationResult
     The result structure for the update domain association request. 
    """
    
    domain_association: shared_domainassociation.DomainAssociation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociation') }})
    
