import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifacttype_enum as shared_artifacttype_enum
from ..shared import mavenreference as shared_mavenreference
from ..shared import s3contentlocation as shared_s3contentlocation


@dataclass_json
@dataclasses.dataclass
class CustomArtifactConfiguration:
    r"""CustomArtifactConfiguration
    Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
    """
    
    artifact_type: shared_artifacttype_enum.ArtifactTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactType') }})
    maven_reference: Optional[shared_mavenreference.MavenReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MavenReference') }})
    s3_content_location: Optional[shared_s3contentlocation.S3ContentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    
