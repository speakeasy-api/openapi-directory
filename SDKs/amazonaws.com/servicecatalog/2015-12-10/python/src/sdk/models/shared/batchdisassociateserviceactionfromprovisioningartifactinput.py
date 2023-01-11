import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactionassociation as shared_serviceactionassociation


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateServiceActionFromProvisioningArtifactInput:
    service_action_associations: list[shared_serviceactionassociation.ServiceActionAssociation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionAssociations') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
