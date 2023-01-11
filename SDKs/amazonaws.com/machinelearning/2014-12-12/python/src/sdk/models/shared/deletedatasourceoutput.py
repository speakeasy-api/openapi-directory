import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteDataSourceOutput:
    r"""DeleteDataSourceOutput
     Represents the output of a <code>DeleteDataSource</code> operation.
    """
    
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    
