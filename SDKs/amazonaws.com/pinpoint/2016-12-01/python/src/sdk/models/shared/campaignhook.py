import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mode_enum as shared_mode_enum


@dataclass_json
@dataclasses.dataclass
class CampaignHook:
    r"""CampaignHook
    Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
    """
    
    lambda_function_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaFunctionName') }})
    mode: Optional[shared_mode_enum.ModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    web_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebUrl') }})
    
