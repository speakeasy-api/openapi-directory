import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import fieldlevelencryptionconfig as shared_fieldlevelencryptionconfig


@dataclasses.dataclass
class FieldLevelEncryption:
    r"""FieldLevelEncryption
    A complex data type that includes the profile configurations and other options specified for field-level encryption. 
    """
    
    field_level_encryption_config: shared_fieldlevelencryptionconfig.FieldLevelEncryptionConfig = dataclasses.field()
    id: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    
