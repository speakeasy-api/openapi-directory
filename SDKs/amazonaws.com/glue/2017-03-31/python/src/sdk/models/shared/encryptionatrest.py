import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import catalogencryptionmode_enum as shared_catalogencryptionmode_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionAtRest:
    r"""EncryptionAtRest
    Specifies the encryption-at-rest configuration for the Data Catalog.
    """
    
    catalog_encryption_mode: shared_catalogencryptionmode_enum.CatalogEncryptionModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogEncryptionMode') }})
    sse_aws_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseAwsKmsKeyId') }})
    
