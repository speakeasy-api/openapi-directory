import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import producttype_enum as shared_producttype_enum
from ..shared import provisioningartifactproperties as shared_provisioningartifactproperties
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateProductInput:
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    product_type: shared_producttype_enum.ProductTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductType') }})
    provisioning_artifact_parameters: shared_provisioningartifactproperties.ProvisioningArtifactProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactParameters') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    distributor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distributor') }})
    support_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportDescription') }})
    support_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportEmail') }})
    support_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportUrl') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
