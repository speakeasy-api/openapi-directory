import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import copyoption_enum as shared_copyoption_enum


@dataclass_json
@dataclasses.dataclass
class CopyProductInput:
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    source_product_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceProductArn') }})
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    copy_options: Optional[list[shared_copyoption_enum.CopyOptionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyOptions') }})
    source_provisioning_artifact_identifiers: Optional[list[dict[str, str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceProvisioningArtifactIdentifiers') }})
    target_product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetProductId') }})
    target_product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetProductName') }})
    
