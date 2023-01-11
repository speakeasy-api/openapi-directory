import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import fieldlevelencryptionprofile as shared_fieldlevelencryptionprofile


@dataclasses.dataclass
class UpdateFieldLevelEncryptionProfileResult:
    field_level_encryption_profile: Optional[shared_fieldlevelencryptionprofile.FieldLevelEncryptionProfile] = dataclasses.field(default=None)
    
