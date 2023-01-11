import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AccountSettings:
    r"""AccountSettings
    The AWS Proton pipeline service role data.
    """
    
    pipeline_service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineServiceRoleArn') }})
    
