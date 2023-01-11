import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JobWorkerExecutorConfiguration:
    r"""JobWorkerExecutorConfiguration
    Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
    """
    
    polling_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingAccounts') }})
    polling_service_principals: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingServicePrincipals') }})
    
