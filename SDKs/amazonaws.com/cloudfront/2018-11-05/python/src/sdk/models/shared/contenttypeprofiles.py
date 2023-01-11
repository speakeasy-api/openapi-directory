import dataclasses
from typing import Optional
from ..shared import contenttypeprofilelist as shared_contenttypeprofilelist


@dataclasses.dataclass
class ContentTypeProfiles:
    r"""ContentTypeProfiles
    Field-level encryption content type-profile. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_contenttypeprofilelist.ContentTypeProfileList]] = dataclasses.field(default=None)
    
