import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlinjectionmatchset as shared_sqlinjectionmatchset


@dataclass_json
@dataclasses.dataclass
class GetSQLInjectionMatchSetResponse:
    r"""GetSQLInjectionMatchSetResponse
    The response to a <a>GetSqlInjectionMatchSet</a> request.
    """
    
    sql_injection_match_set: Optional[shared_sqlinjectionmatchset.SQLInjectionMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSet') }})
    
