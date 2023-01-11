import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iamactiondefinition as shared_iamactiondefinition
from ..shared import scpactiondefinition as shared_scpactiondefinition
from ..shared import ssmactiondefinition as shared_ssmactiondefinition


@dataclass_json
@dataclasses.dataclass
class Definition:
    r"""Definition
     Specifies all of the type-specific parameters. 
    """
    
    iam_action_definition: Optional[shared_iamactiondefinition.IamActionDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamActionDefinition') }})
    scp_action_definition: Optional[shared_scpactiondefinition.ScpActionDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScpActionDefinition') }})
    ssm_action_definition: Optional[shared_ssmactiondefinition.SsmActionDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsmActionDefinition') }})
    
