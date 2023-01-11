import dataclasses
from typing import Optional
from ..shared import installationmediafailurecause as shared_installationmediafailurecause


@dataclasses.dataclass
class InstallationMedia:
    r"""InstallationMedia
    Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
    """
    
    custom_availability_zone_id: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_installation_media_path: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    failure_cause: Optional[shared_installationmediafailurecause.InstallationMediaFailureCause] = dataclasses.field(default=None)
    installation_media_id: Optional[str] = dataclasses.field(default=None)
    os_installation_media_path: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
