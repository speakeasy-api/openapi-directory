import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namedquery as shared_namedquery
from ..shared import unprocessednamedqueryid as shared_unprocessednamedqueryid


@dataclass_json
@dataclasses.dataclass
class BatchGetNamedQueryOutput:
    named_queries: Optional[list[shared_namedquery.NamedQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamedQueries') }})
    unprocessed_named_query_ids: Optional[list[shared_unprocessednamedqueryid.UnprocessedNamedQueryID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedNamedQueryIds') }})
    
