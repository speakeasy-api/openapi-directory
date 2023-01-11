import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compressionformatstrategy_enum as shared_compressionformatstrategy_enum
from ..shared import credential as shared_credential
from ..shared import downloadcatalogstrategy_enum as shared_downloadcatalogstrategy_enum


@dataclass_json
@dataclasses.dataclass
class InputFileFetchConfiguration:
    r"""InputFileFetchConfiguration
    Describe the way to download the file
    """
    
    download_catalog_strategy: shared_downloadcatalogstrategy_enum.DownloadCatalogStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadCatalogStrategy') }})
    uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    compressed_relative_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressedRelativePath') }})
    compression_format_strategy: Optional[shared_compressionformatstrategy_enum.CompressionFormatStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionFormatStrategy') }})
    credential: Optional[shared_credential.Credential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    download_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadTimeout') }})
    
