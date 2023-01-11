import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdaconfiguration as shared_lambdaconfiguration
from ..shared import snsconfiguration as shared_snsconfiguration


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    A configuration that specifies the action to perform when anomalies are detected.
    """
    
    lambda_configuration: Optional[shared_lambdaconfiguration.LambdaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfiguration') }})
    sns_configuration: Optional[shared_snsconfiguration.SnsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSConfiguration') }})
    
