import dataclasses
from typing import Optional
from ..shared import contenttypeprofiles as shared_contenttypeprofiles


@dataclasses.dataclass
class ContentTypeProfileConfig:
    r"""ContentTypeProfileConfig
    The configuration for a field-level encryption content type-profile mapping. 
    """
    
    forward_when_content_type_is_unknown: bool = dataclasses.field()
    content_type_profiles: Optional[shared_contenttypeprofiles.ContentTypeProfiles] = dataclasses.field(default=None)
    
