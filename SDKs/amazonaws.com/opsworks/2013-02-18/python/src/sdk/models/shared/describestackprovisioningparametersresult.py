import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeStackProvisioningParametersResult:
    r"""DescribeStackProvisioningParametersResult
    Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
    """
    
    agent_installer_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentInstallerUrl') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
