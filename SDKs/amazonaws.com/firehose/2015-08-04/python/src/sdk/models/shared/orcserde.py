import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orccompression_enum as shared_orccompression_enum
from ..shared import orcformatversion_enum as shared_orcformatversion_enum


@dataclass_json
@dataclasses.dataclass
class OrcSerDe:
    r"""OrcSerDe
    A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href=\"https://orc.apache.org/docs/\">Apache ORC</a>.
    """
    
    block_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockSizeBytes') }})
    bloom_filter_columns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BloomFilterColumns') }})
    bloom_filter_false_positive_probability: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BloomFilterFalsePositiveProbability') }})
    compression: Optional[shared_orccompression_enum.OrcCompressionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compression') }})
    dictionary_key_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DictionaryKeyThreshold') }})
    enable_padding: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnablePadding') }})
    format_version: Optional[shared_orcformatversion_enum.OrcFormatVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FormatVersion') }})
    padding_tolerance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingTolerance') }})
    row_index_stride: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowIndexStride') }})
    stripe_size_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StripeSizeBytes') }})
    
