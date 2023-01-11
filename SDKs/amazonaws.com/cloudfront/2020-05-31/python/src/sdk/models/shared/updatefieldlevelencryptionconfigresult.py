import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import fieldlevelencryption as shared_fieldlevelencryption


@dataclasses.dataclass
class UpdateFieldLevelEncryptionConfigResult:
    field_level_encryption: Optional[shared_fieldlevelencryption.FieldLevelEncryption] = dataclasses.field(default=None)
    
