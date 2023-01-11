import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codesigningpolicy_enum as shared_codesigningpolicy_enum


@dataclass_json
@dataclasses.dataclass
class CodeSigningPolicies:
    r"""CodeSigningPolicies
    Code signing configuration <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies\">policies</a> specify the validation failure action for signature mismatch or expiry.
    """
    
    untrusted_artifact_on_deployment: Optional[shared_codesigningpolicy_enum.CodeSigningPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UntrustedArtifactOnDeployment') }})
    
