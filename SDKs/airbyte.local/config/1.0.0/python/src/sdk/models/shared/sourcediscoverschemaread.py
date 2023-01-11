import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import airbytecatalog as shared_airbytecatalog
from ..shared import synchronousjobread as shared_synchronousjobread


@dataclass_json
@dataclasses.dataclass
class SourceDiscoverSchemaRead:
    r"""SourceDiscoverSchemaRead
    Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.
    """
    
    job_info: shared_synchronousjobread.SynchronousJobRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    catalog: Optional[shared_airbytecatalog.AirbyteCatalog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalog') }})
    
