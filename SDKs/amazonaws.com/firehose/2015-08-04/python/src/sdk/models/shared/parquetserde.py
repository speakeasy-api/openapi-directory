import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parquetcompression_enum as shared_parquetcompression_enum
from ..shared import parquetwriterversion_enum as shared_parquetwriterversion_enum


@dataclass_json
@dataclasses.dataclass
class ParquetSerDe:
    r"""ParquetSerDe
    A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href=\"https://parquet.apache.org/documentation/latest/\">Apache Parquet</a>.
    """
    
    block_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockSizeBytes') }})
    compression: Optional[shared_parquetcompression_enum.ParquetCompressionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    enable_dictionary_compression: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDictionaryCompression') }})
    max_padding_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPaddingBytes') }})
    page_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSizeBytes') }})
    writer_version: Optional[shared_parquetwriterversion_enum.ParquetWriterVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriterVersion') }})
    
