import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sqlinjectionmatchsetupdate as shared_sqlinjectionmatchsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateSQLInjectionMatchSetRequest:
    r"""UpdateSQLInjectionMatchSetRequest
    A request to update a <a>SqlInjectionMatchSet</a>.
    """
    
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    sql_injection_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqlInjectionMatchSetId') }})
    updates: list[shared_sqlinjectionmatchsetupdate.SQLInjectionMatchSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
