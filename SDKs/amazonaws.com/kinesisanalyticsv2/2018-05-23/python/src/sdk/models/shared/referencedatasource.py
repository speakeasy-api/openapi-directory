import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceschema as shared_sourceschema
from ..shared import s3referencedatasource as shared_s3referencedatasource


@dataclass_json
@dataclasses.dataclass
class ReferenceDataSource:
    r"""ReferenceDataSource
    For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
    """
    
    reference_schema: shared_sourceschema.SourceSchema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceSchema') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    s3_reference_data_source: Optional[shared_s3referencedatasource.S3ReferenceDataSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ReferenceDataSource') }})
    
