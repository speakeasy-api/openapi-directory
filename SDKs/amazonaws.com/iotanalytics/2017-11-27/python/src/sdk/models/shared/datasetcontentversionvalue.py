import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatasetContentVersionValue:
    r"""DatasetContentVersionValue
    The dataset whose latest contents are used as input to the notebook or application.
    """
    
    dataset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetName') }})
    
