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
class CustomArtifactConfigurationDescription:
    r"""CustomArtifactConfigurationDescription
    Specifies a dependency JAR or a JAR of user-defined functions.
    """
    
    artifact_type: Optional[shared_artifacttype_enum.ArtifactTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactType') }})
    maven_reference_description: Optional[shared_mavenreference.MavenReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MavenReferenceDescription') }})
    s3_content_location_description: Optional[shared_s3contentlocation.S3ContentLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationDescription') }})
    
