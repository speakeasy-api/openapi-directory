import dataclasses
from enum import Enum
from ..shared import sourcerepository_enum as shared_sourcerepository_enum
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclasses.dataclass
class SourceBuildInformation:
    r"""SourceBuildInformation
    Location of the source code for an application version.
    """
    
    source_location: str = dataclasses.field()
    source_repository: shared_sourcerepository_enum.SourceRepositoryEnum = dataclasses.field()
    source_type: shared_sourcetype_enum.SourceTypeEnum = dataclasses.field()
    
