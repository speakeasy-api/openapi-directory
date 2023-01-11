import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlinjectionmatchsetsummary as shared_sqlinjectionmatchsetsummary


@dataclass_json
@dataclasses.dataclass
class ListSQLInjectionMatchSetsResponse:
    r"""ListSQLInjectionMatchSetsResponse
    The response to a <a>ListSqlInjectionMatchSets</a> request.
    """
    
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    sql_injection_match_sets: Optional[list[shared_sqlinjectionmatchsetsummary.SQLInjectionMatchSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSets') }})
    
