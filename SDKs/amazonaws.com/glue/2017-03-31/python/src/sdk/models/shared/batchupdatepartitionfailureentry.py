import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class BatchUpdatePartitionFailureEntry:
    r"""BatchUpdatePartitionFailureEntry
    Contains information about a batch update partition error.
    """
    
    error_detail: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    partition_value_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionValueList') }})
    
