import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningartifactproperties as shared_provisioningartifactproperties


@dataclass_json
@dataclasses.dataclass
class CreateProvisioningArtifactInput:
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    parameters: shared_provisioningartifactproperties.ProvisioningArtifactProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    
