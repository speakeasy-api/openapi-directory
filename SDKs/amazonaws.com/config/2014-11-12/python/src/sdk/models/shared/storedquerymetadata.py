import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StoredQueryMetadata:
    r"""StoredQueryMetadata
    Returns details of a specific query. 
    """
    
    query_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryArn') }})
    query_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryId') }})
    query_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
