import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceschema as shared_sourceschema
from ..shared import s3referencedatasourcedescription as shared_s3referencedatasourcedescription


@dataclass_json
@dataclasses.dataclass
class ReferenceDataSourceDescription:
    r"""ReferenceDataSourceDescription
    For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
    """
    
    reference_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    s3_reference_data_source_description: shared_s3referencedatasourcedescription.S3ReferenceDataSourceDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ReferenceDataSourceDescription') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    reference_schema: Optional[shared_sourceschema.SourceSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceSchema') }})
    
