import dataclasses
from typing import Optional
from ..shared import siteentity as shared_siteentity


@dataclasses.dataclass
class GetSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    site_entity: Optional[shared_siteentity.SiteEntity] = dataclasses.field(default=None)
    
