import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationstatus as shared_configurationstatus
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class PutDefaultEncryptionConfigurationResponse:
    configuration_status: shared_configurationstatus.ConfigurationStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationStatus') }})
    encryption_type: shared_encryptiontype_enum.EncryptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    
