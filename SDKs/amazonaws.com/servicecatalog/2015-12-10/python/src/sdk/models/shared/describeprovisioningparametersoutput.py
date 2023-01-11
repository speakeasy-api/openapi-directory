import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraintsummary as shared_constraintsummary
from ..shared import provisioningartifactoutput as shared_provisioningartifactoutput
from ..shared import provisioningartifactparameter as shared_provisioningartifactparameter
from ..shared import provisioningartifactpreferences as shared_provisioningartifactpreferences
from ..shared import tagoptionsummary as shared_tagoptionsummary
from ..shared import usageinstruction as shared_usageinstruction


@dataclass_json
@dataclasses.dataclass
class DescribeProvisioningParametersOutput:
    constraint_summaries: Optional[list[shared_constraintsummary.ConstraintSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintSummaries') }})
    provisioning_artifact_outputs: Optional[list[shared_provisioningartifactoutput.ProvisioningArtifactOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactOutputs') }})
    provisioning_artifact_parameters: Optional[list[shared_provisioningartifactparameter.ProvisioningArtifactParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactParameters') }})
    provisioning_artifact_preferences: Optional[shared_provisioningartifactpreferences.ProvisioningArtifactPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactPreferences') }})
    tag_options: Optional[list[shared_tagoptionsummary.TagOptionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptions') }})
    usage_instructions: Optional[list[shared_usageinstruction.UsageInstruction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageInstructions') }})
    
