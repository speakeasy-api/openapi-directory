"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import inputcompressiontype_enum as shared_inputcompressiontype_enum
from ..shared import inputformat_enum as shared_inputformat_enum
from ..shared import inputformatoptions as shared_inputformatoptions
from ..shared import s3bucketsource as shared_s3bucketsource
from ..shared import tablecreationparameters as shared_tablecreationparameters
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ImportTableInput:
    
    input_format: shared_inputformat_enum.InputFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InputFormat') }})  
    s3_bucket_source: shared_s3bucketsource.S3BucketSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3BucketSource') }})  
    table_creation_parameters: shared_tablecreationparameters.TableCreationParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TableCreationParameters') }})  
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ClientToken'), 'exclude': lambda f: f is None }})  
    input_compression_type: Optional[shared_inputcompressiontype_enum.InputCompressionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InputCompressionType'), 'exclude': lambda f: f is None }})  
    input_format_options: Optional[shared_inputformatoptions.InputFormatOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InputFormatOptions'), 'exclude': lambda f: f is None }})  
    