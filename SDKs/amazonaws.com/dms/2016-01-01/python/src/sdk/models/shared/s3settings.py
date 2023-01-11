import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cannedaclforobjectsvalue_enum as shared_cannedaclforobjectsvalue_enum
from ..shared import compressiontypevalue_enum as shared_compressiontypevalue_enum
from ..shared import dataformatvalue_enum as shared_dataformatvalue_enum
from ..shared import datepartitiondelimitervalue_enum as shared_datepartitiondelimitervalue_enum
from ..shared import datepartitionsequencevalue_enum as shared_datepartitionsequencevalue_enum
from ..shared import encodingtypevalue_enum as shared_encodingtypevalue_enum
from ..shared import encryptionmodevalue_enum as shared_encryptionmodevalue_enum
from ..shared import parquetversionvalue_enum as shared_parquetversionvalue_enum


@dataclass_json
@dataclasses.dataclass
class S3Settings:
    r"""S3Settings
    Settings for exporting data to Amazon S3. 
    """
    
    add_column_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddColumnName') }})
    bucket_folder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketFolder') }})
    bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    canned_acl_for_objects: Optional[shared_cannedaclforobjectsvalue_enum.CannedACLForObjectsValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CannedAclForObjects') }})
    cdc_inserts_and_updates: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcInsertsAndUpdates') }})
    cdc_inserts_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcInsertsOnly') }})
    cdc_max_batch_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcMaxBatchInterval') }})
    cdc_min_file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcMinFileSize') }})
    cdc_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CdcPath') }})
    compression_type: Optional[shared_compressiontypevalue_enum.CompressionTypeValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionType') }})
    csv_delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvDelimiter') }})
    csv_no_sup_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvNoSupValue') }})
    csv_null_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvNullValue') }})
    csv_row_delimiter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvRowDelimiter') }})
    data_format: Optional[shared_dataformatvalue_enum.DataFormatValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    data_page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataPageSize') }})
    date_partition_delimiter: Optional[shared_datepartitiondelimitervalue_enum.DatePartitionDelimiterValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatePartitionDelimiter') }})
    date_partition_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatePartitionEnabled') }})
    date_partition_sequence: Optional[shared_datepartitionsequencevalue_enum.DatePartitionSequenceValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatePartitionSequence') }})
    dict_page_size_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DictPageSizeLimit') }})
    enable_statistics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableStatistics') }})
    encoding_type: Optional[shared_encodingtypevalue_enum.EncodingTypeValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncodingType') }})
    encryption_mode: Optional[shared_encryptionmodevalue_enum.EncryptionModeValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionMode') }})
    external_table_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalTableDefinition') }})
    ignore_header_rows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreHeaderRows') }})
    include_op_for_full_load: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeOpForFullLoad') }})
    max_file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFileSize') }})
    parquet_timestamp_in_millisecond: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParquetTimestampInMillisecond') }})
    parquet_version: Optional[shared_parquetversionvalue_enum.ParquetVersionValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParquetVersion') }})
    preserve_transactions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreserveTransactions') }})
    rfc4180: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rfc4180') }})
    row_group_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowGroupLength') }})
    server_side_encryption_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideEncryptionKmsKeyId') }})
    service_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    timestamp_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampColumnName') }})
    use_csv_no_sup_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCsvNoSupValue') }})
    
