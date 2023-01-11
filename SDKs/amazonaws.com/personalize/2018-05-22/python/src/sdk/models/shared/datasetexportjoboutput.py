import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3dataconfig as shared_s3dataconfig


@dataclass_json
@dataclasses.dataclass
class DatasetExportJobOutput:
    r"""DatasetExportJobOutput
    The output configuration parameters of a dataset export job.
    """
    
    s3_data_destination: shared_s3dataconfig.S3DataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DataDestination') }})
    
