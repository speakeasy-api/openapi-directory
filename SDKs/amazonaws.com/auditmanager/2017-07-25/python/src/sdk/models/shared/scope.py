import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsaccount as shared_awsaccount
from ..shared import awsservice as shared_awsservice


@dataclass_json
@dataclasses.dataclass
class Scope:
    r"""Scope
     The wrapper that contains the accounts and services in scope for the assessment. 
    """
    
    aws_accounts: Optional[list[shared_awsaccount.AwsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccounts') }})
    aws_services: Optional[list[shared_awsservice.AwsService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsServices') }})
    
