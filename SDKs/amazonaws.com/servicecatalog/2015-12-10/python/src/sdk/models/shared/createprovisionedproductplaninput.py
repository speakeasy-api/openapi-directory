import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedproductplantype_enum as shared_provisionedproductplantype_enum
from ..shared import updateprovisioningparameter as shared_updateprovisioningparameter
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateProvisionedProductPlanInput:
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    plan_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlanName') }})
    plan_type: shared_provisionedproductplantype_enum.ProvisionedProductPlanTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlanType') }})
    product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioned_product_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    provisioning_artifact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    notification_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationArns') }})
    path_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    provisioning_parameters: Optional[list[shared_updateprovisioningparameter.UpdateProvisioningParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningParameters') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
