import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import committransactionrequest as shared_committransactionrequest
from ..shared import executestatementrequest as shared_executestatementrequest
from ..shared import fetchpagerequest as shared_fetchpagerequest
from ..shared import startsessionrequest as shared_startsessionrequest


@dataclass_json
@dataclasses.dataclass
class SendCommandRequest:
    abort_transaction: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortTransaction') }})
    commit_transaction: Optional[shared_committransactionrequest.CommitTransactionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitTransaction') }})
    end_session: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndSession') }})
    execute_statement: Optional[shared_executestatementrequest.ExecuteStatementRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteStatement') }})
    fetch_page: Optional[shared_fetchpagerequest.FetchPageRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FetchPage') }})
    session_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionToken') }})
    start_session: Optional[shared_startsessionrequest.StartSessionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartSession') }})
    start_transaction: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTransaction') }})
    
