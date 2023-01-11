import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceschema as shared_sourceschema
from ..shared import s3referencedatasourceupdate as shared_s3referencedatasourceupdate


@dataclass_json
@dataclasses.dataclass
class ReferenceDataSourceUpdate:
    r"""ReferenceDataSourceUpdate
    When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
    """
    
    reference_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    reference_schema_update: Optional[shared_sourceschema.SourceSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceSchemaUpdate') }})
    s3_reference_data_source_update: Optional[shared_s3referencedatasourceupdate.S3ReferenceDataSourceUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ReferenceDataSourceUpdate') }})
    table_name_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableNameUpdate') }})
    
