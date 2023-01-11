import dataclasses
from ..shared import fieldpatterns as shared_fieldpatterns


@dataclasses.dataclass
class EncryptionEntityList:
    r"""EncryptionEntityList
    Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. 
    """
    
    field_patterns: shared_fieldpatterns.FieldPatterns = dataclasses.field()
    provider_id: str = dataclasses.field()
    public_key_id: str = dataclasses.field()
    
