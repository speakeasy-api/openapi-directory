import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningparameter as shared_provisioningparameter
from ..shared import provisioningpreferences as shared_provisioningpreferences
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ProvisionProductInput:
    provision_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionToken') }})
    provisioned_product_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    notification_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationArns') }})
    path_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    path_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathName') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    provisioning_artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    provisioning_artifact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactName') }})
    provisioning_parameters: Optional[list[shared_provisioningparameter.ProvisioningParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningParameters') }})
    provisioning_preferences: Optional[shared_provisioningpreferences.ProvisioningPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningPreferences') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
