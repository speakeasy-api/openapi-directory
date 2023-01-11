import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aborttransactionresult as shared_aborttransactionresult
from ..shared import committransactionresult as shared_committransactionresult
from ..shared import endsessionresult as shared_endsessionresult
from ..shared import executestatementresult as shared_executestatementresult
from ..shared import fetchpageresult as shared_fetchpageresult
from ..shared import startsessionresult as shared_startsessionresult
from ..shared import starttransactionresult as shared_starttransactionresult


@dataclass_json
@dataclasses.dataclass
class SendCommandResult:
    abort_transaction: Optional[shared_aborttransactionresult.AbortTransactionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortTransaction') }})
    commit_transaction: Optional[shared_committransactionresult.CommitTransactionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitTransaction') }})
    end_session: Optional[shared_endsessionresult.EndSessionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndSession') }})
    execute_statement: Optional[shared_executestatementresult.ExecuteStatementResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteStatement') }})
    fetch_page: Optional[shared_fetchpageresult.FetchPageResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FetchPage') }})
    start_session: Optional[shared_startsessionresult.StartSessionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartSession') }})
    start_transaction: Optional[shared_starttransactionresult.StartTransactionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTransaction') }})
    
