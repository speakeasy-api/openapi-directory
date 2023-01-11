import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytemplatename_enum as shared_policytemplatename_enum


@dataclass_json
@dataclasses.dataclass
class ReplaceDefaultPolicyVersionParams:
    r"""ReplaceDefaultPolicyVersionParams
    Parameters to define a mitigation action that adds a blank policy to restrict permissions.
    """
    
    template_name: shared_policytemplatename_enum.PolicyTemplateNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    
