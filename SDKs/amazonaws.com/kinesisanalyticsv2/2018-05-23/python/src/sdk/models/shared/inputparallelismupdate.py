import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputParallelismUpdate:
    r"""InputParallelismUpdate
    For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
    """
    
    count_update: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountUpdate') }})
    
