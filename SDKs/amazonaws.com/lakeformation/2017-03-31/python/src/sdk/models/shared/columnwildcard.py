import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ColumnWildcard:
    r"""ColumnWildcard
    A wildcard object, consisting of an optional list of excluded column names or indexes.
    """
    
    excluded_column_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedColumnNames') }})
    
