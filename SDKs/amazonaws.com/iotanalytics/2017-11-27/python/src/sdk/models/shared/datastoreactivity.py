import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatastoreActivity:
    r"""DatastoreActivity
    The datastore activity that specifies where to store the processed data.
    """
    
    datastore_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
