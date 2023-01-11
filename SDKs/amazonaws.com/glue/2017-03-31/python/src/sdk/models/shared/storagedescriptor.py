import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import column as shared_column
from ..shared import schemareference as shared_schemareference
from ..shared import serdeinfo as shared_serdeinfo
from ..shared import skewedinfo as shared_skewedinfo
from ..shared import order as shared_order


@dataclass_json
@dataclasses.dataclass
class StorageDescriptor:
    r"""StorageDescriptor
    Describes the physical storage of table data.
    """
    
    bucket_columns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketColumns') }})
    columns: Optional[list[shared_column.Column]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Columns') }})
    compressed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compressed') }})
    input_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputFormat') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    number_of_buckets: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfBuckets') }})
    output_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputFormat') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    schema_reference: Optional[shared_schemareference.SchemaReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaReference') }})
    serde_info: Optional[shared_serdeinfo.SerDeInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerdeInfo') }})
    skewed_info: Optional[shared_skewedinfo.SkewedInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkewedInfo') }})
    sort_columns: Optional[list[shared_order.Order]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortColumns') }})
    stored_as_sub_directories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoredAsSubDirectories') }})
    
