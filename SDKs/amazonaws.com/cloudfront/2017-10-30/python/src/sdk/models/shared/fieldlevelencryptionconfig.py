import dataclasses
from typing import Optional
from ..shared import contenttypeprofileconfig as shared_contenttypeprofileconfig
from ..shared import queryargprofileconfig as shared_queryargprofileconfig


@dataclasses.dataclass
class FieldLevelEncryptionConfig:
    r"""FieldLevelEncryptionConfig
    A complex data type that includes the profile configurations specified for field-level encryption. 
    """
    
    caller_reference: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    content_type_profile_config: Optional[shared_contenttypeprofileconfig.ContentTypeProfileConfig] = dataclasses.field(default=None)
    query_arg_profile_config: Optional[shared_queryargprofileconfig.QueryArgProfileConfig] = dataclasses.field(default=None)
    
