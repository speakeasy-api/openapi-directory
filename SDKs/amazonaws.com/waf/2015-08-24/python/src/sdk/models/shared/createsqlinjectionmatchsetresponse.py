import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlinjectionmatchset as shared_sqlinjectionmatchset


@dataclass_json
@dataclasses.dataclass
class CreateSQLInjectionMatchSetResponse:
    r"""CreateSQLInjectionMatchSetResponse
    The response to a <code>CreateSqlInjectionMatchSet</code> request.
    """
    
    change_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    sql_injection_match_set: Optional[shared_sqlinjectionmatchset.SQLInjectionMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSet') }})
    
