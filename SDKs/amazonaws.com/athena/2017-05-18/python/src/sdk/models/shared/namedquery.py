import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NamedQuery:
    r"""NamedQuery
    A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
    """
    
    database: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    named_query_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamedQueryId') }})
    work_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
