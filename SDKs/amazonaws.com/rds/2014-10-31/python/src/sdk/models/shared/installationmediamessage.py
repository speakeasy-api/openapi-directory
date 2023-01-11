import dataclasses
from typing import Optional
from ..shared import installationmedialist as shared_installationmedialist


@dataclasses.dataclass
class InstallationMediaMessage:
    installation_media: Optional[list[shared_installationmedialist.InstallationMediaList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
