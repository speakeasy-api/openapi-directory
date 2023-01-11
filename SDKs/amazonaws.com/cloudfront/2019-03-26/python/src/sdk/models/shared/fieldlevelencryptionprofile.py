import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import fieldlevelencryptionprofileconfig as shared_fieldlevelencryptionprofileconfig


@dataclasses.dataclass
class FieldLevelEncryptionProfile:
    r"""FieldLevelEncryptionProfile
    A complex data type for field-level encryption profiles.
    """
    
    field_level_encryption_profile_config: shared_fieldlevelencryptionprofileconfig.FieldLevelEncryptionProfileConfig = dataclasses.field()
    id: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    
