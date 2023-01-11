import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchDescribeMergeConflictsError:
    r"""BatchDescribeMergeConflictsError
    Returns information about errors in a BatchDescribeMergeConflicts operation.
    """
    
    exception_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionName') }})
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
