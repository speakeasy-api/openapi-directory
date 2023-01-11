import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apipassthrough as shared_apipassthrough
from ..shared import signingalgorithm_enum as shared_signingalgorithm_enum
from ..shared import validity as shared_validity


@dataclass_json
@dataclasses.dataclass
class IssueCertificateRequest:
    certificate_authority_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    csr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Csr') }})
    signing_algorithm: shared_signingalgorithm_enum.SigningAlgorithmEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    validity: shared_validity.Validity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    api_passthrough: Optional[shared_apipassthrough.APIPassthrough] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiPassthrough') }})
    idempotency_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    template_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateArn') }})
    validity_not_before: Optional[shared_validity.Validity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidityNotBefore') }})
    
